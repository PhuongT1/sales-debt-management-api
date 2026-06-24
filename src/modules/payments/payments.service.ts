import { BadRequestException, Injectable } from "@nestjs/common";
import { DebtStatus, PaymentMethod, Prisma } from "../../generated/prisma";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(debtId: string, input: Record<string, unknown>) {
    return this.prisma.$transaction(async (tx) => {
      const debt = await tx.debt.findUniqueOrThrow({ where: { id: debtId } });

      if (debt.status === DebtStatus.CANCELLED) {
        throw new BadRequestException("Không thể thanh toán công nợ đã hủy");
      }
      if (debt.status === DebtStatus.PAID) {
        throw new BadRequestException("Công nợ đã thanh toán đủ");
      }

      const amount = new Prisma.Decimal(String(input.amount));
      const remaining = debt.originalAmount.minus(debt.paidAmount);

      if (amount.greaterThan(remaining)) {
        throw new BadRequestException("Số tiền thanh toán vượt quá số dư còn lại");
      }

      const nextPaidAmount = debt.paidAmount.plus(amount);
      const nextStatus = nextPaidAmount.greaterThanOrEqualTo(debt.originalAmount) ? DebtStatus.PAID : DebtStatus.PARTIAL;

      const payment = await tx.payment.create({
        data: {
          debtId,
          amount,
          paidAt: new Date(String(input.paidAt)),
          method: (input.method as PaymentMethod) ?? PaymentMethod.BANK_TRANSFER,
          referenceNo: this.nullable(input.referenceNo),
          note: this.nullable(input.note),
        },
      });

      const updatedDebt = await tx.debt.update({
        where: { id: debtId },
        data: { paidAmount: nextPaidAmount, status: nextStatus },
        include: { party: true },
      });

      return { payment, debt: updatedDebt };
    });
  }

  async list(query: Record<string, string | undefined>) {
    const page = Math.max(1, Number(query.page ?? 1));
    const pageSize = Math.min(100, Math.max(1, Number(query.pageSize ?? 20)));

    const [items, total] = await this.prisma.$transaction([
      this.prisma.payment.findMany({
        orderBy: { paidAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: { debt: { include: { party: true } }, createdBy: { select: { id: true, name: true, email: true } } },
      }),
      this.prisma.payment.count(),
    ]);

    return { items, total, page, pageSize };
  }

  async remove(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findUniqueOrThrow({ where: { id }, include: { debt: true } });
      await tx.payment.delete({ where: { id } });

      const nextPaidAmount = payment.debt.paidAmount.minus(payment.amount);
      const nextStatus = nextPaidAmount.lessThanOrEqualTo(0)
        ? DebtStatus.OPEN
        : nextPaidAmount.lessThan(payment.debt.originalAmount)
          ? DebtStatus.PARTIAL
          : DebtStatus.PAID;

      return tx.debt.update({
        where: { id: payment.debtId },
        data: { paidAmount: nextPaidAmount.lessThan(0) ? 0 : nextPaidAmount, status: nextStatus },
      });
    });
  }

  private nullable(value: unknown) {
    const text = String(value ?? "").trim();
    return text.length > 0 ? text : null;
  }
}
