import { Injectable } from "@nestjs/common";
import { DebtStatus, DebtType, Prisma } from "../../generated/prisma";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    const [debts, recentPayments, topDebts] = await Promise.all([
      this.prisma.debt.findMany({ where: { status: { not: DebtStatus.CANCELLED } } }),
      this.prisma.payment.findMany({
        orderBy: { paidAt: "desc" },
        take: 8,
        include: { debt: { include: { party: true } } },
      }),
      this.prisma.debt.findMany({
        where: { status: { notIn: [DebtStatus.PAID, DebtStatus.CANCELLED] } },
        orderBy: { dueDate: "asc" },
        take: 8,
        include: { party: true },
      }),
    ]);

    const sum = (items: typeof debts, field: "originalAmount" | "paidAmount") =>
      items.reduce((total, debt) => total.plus(debt[field]), new Prisma.Decimal(0));
    const receivable = debts.filter((debt) => debt.type === DebtType.RECEIVABLE);
    const payable = debts.filter((debt) => debt.type === DebtType.PAYABLE);
    const now = new Date();

    return {
      receivable: {
        original: sum(receivable, "originalAmount"),
        paid: sum(receivable, "paidAmount"),
        remaining: sum(receivable, "originalAmount").minus(sum(receivable, "paidAmount")),
      },
      payable: {
        original: sum(payable, "originalAmount"),
        paid: sum(payable, "paidAmount"),
        remaining: sum(payable, "originalAmount").minus(sum(payable, "paidAmount")),
      },
      overdueCount: debts.filter((debt) => debt.dueDate < now && debt.status !== DebtStatus.PAID).length,
      recentPayments,
      topDebts,
    };
  }
}
