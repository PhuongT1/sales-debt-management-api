import { BadRequestException, Injectable } from "@nestjs/common";
import { CollectionStatus, DebtStatus, DebtType, Prisma } from "../../generated/prisma";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class DebtsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: Record<string, string | undefined>) {
    const page = Math.max(1, Number(query.page ?? 1));
    const pageSize = Math.min(1000, Math.max(1, Number(query.pageSize ?? 20)));
    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const endOfToday = new Date(now);
    endOfToday.setHours(23, 59, 59, 999);

    const where: Prisma.DebtWhereInput = {
      ...(query.type ? { type: query.type as DebtType } : {}),
      ...(query.status ? { status: query.status as DebtStatus } : {}),
      ...(query.collectionStatus ? { collectionStatus: query.collectionStatus as CollectionStatus } : {}),
      ...(query.partyId ? { partyId: query.partyId } : {}),
      ...(query.assignedToId ? { assignedToId: query.assignedToId } : {}),
      ...this.agingWhere(query.aging, now),
      ...this.followUpWhere(query.followUp, startOfToday, endOfToday),
      ...this.dueRangeWhere(query.dueRange, startOfToday, endOfToday),
      ...this.exactDueDateWhere(query.dueDate),
      ...(query.overdue
        ? { dueDate: { lt: now }, status: { notIn: [DebtStatus.PAID, DebtStatus.CANCELLED] } }
        : {}),
      ...(query.q
        ? {
            OR: [
              { code: { contains: query.q, mode: "insensitive" } },
              { title: { contains: query.q, mode: "insensitive" } },
              { invoiceNo: { contains: query.q, mode: "insensitive" } },
              { orderNo: { contains: query.q, mode: "insensitive" } },
              { contractNo: { contains: query.q, mode: "insensitive" } },
              { poNo: { contains: query.q, mode: "insensitive" } },
              { party: { name: { contains: query.q, mode: "insensitive" } } },
            ],
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.debt.findMany({
        where,
        orderBy: query.overdue ? [{ dueDate: "asc" }] : [{ createdAt: "desc" }],
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          party: true,
          assignedTo: { select: { id: true, name: true, email: true } },
          _count: { select: { payments: true } },
        },
      }),
      this.prisma.debt.count({ where }),
    ]);

    return { items, total, page, pageSize };
  }

  detail(id: string) {
    return this.prisma.debt.findUniqueOrThrow({
      where: { id },
      include: {
        party: true,
        assignedTo: { select: { id: true, name: true, email: true } },
        payments: { orderBy: { paidAt: "desc" }, include: { createdBy: { select: { id: true, name: true, email: true } } } },
      },
    });
  }

  async create(input: Record<string, unknown>) {
    const issueDate = new Date(String(input.issueDate));
    const dueDate = new Date(String(input.dueDate));

    if (dueDate < issueDate) {
      throw new BadRequestException("Ngày đến hạn không được trước ngày phát sinh");
    }

    return this.prisma.debt.create({
      data: {
        code: await this.nextDebtCode(),
        type: input.type as DebtType,
        partyId: String(input.partyId),
        assignedToId: this.nullable(input.assignedToId),
        title: String(input.title ?? "").trim(),
        invoiceNo: this.nullable(input.invoiceNo),
        orderNo: this.nullable(input.orderNo),
        contractNo: this.nullable(input.contractNo),
        poNo: this.nullable(input.poNo),
        description: this.nullable(input.description),
        originalAmount: new Prisma.Decimal(String(input.originalAmount)),
        paidAmount: new Prisma.Decimal(0),
        issueDate,
        dueDate,
        status: DebtStatus.OPEN,
        collectionStatus: CollectionStatus.NEW,
        nextFollowUpAt: input.nextFollowUpAt ? new Date(String(input.nextFollowUpAt)) : null,
        followUpNote: this.nullable(input.followUpNote),
      },
      include: { party: true },
    });
  }

  updateCollection(id: string, input: Record<string, unknown>) {
    return this.prisma.debt.update({
      where: { id },
      data: {
        assignedToId: this.nullable(input.assignedToId),
        collectionStatus: input.collectionStatus as CollectionStatus | undefined,
        nextFollowUpAt: input.nextFollowUpAt ? new Date(String(input.nextFollowUpAt)) : null,
        followUpNote: this.nullable(input.followUpNote),
        invoiceNo: this.nullable(input.invoiceNo),
        orderNo: this.nullable(input.orderNo),
        contractNo: this.nullable(input.contractNo),
        poNo: this.nullable(input.poNo),
        description: this.nullable(input.description),
      },
      include: { party: true, assignedTo: { select: { id: true, name: true, email: true } } },
    });
  }

  async cancel(id: string) {
    const debt = await this.prisma.debt.findUniqueOrThrow({ where: { id }, include: { payments: true } });

    if (debt.payments.length > 0) {
      throw new BadRequestException("Không thể hủy công nợ đã có thanh toán");
    }

    return this.prisma.debt.update({ where: { id }, data: { status: DebtStatus.CANCELLED } });
  }

  private async nextDebtCode() {
    const now = new Date();
    const prefix = `CN-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}`;
    const count = await this.prisma.debt.count({ where: { code: { startsWith: prefix } } });
    return `${prefix}-${String(count + 1).padStart(4, "0")}`;
  }

  private nullable(value: unknown) {
    const text = String(value ?? "").trim();
    return text.length > 0 ? text : null;
  }

  private agingWhere(aging: string | undefined, now: Date): Prisma.DebtWhereInput {
    if (!aging) return {};
    const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000);
    const active = { status: { notIn: [DebtStatus.PAID, DebtStatus.CANCELLED] } };
    if (aging === "not_due") return { ...active, dueDate: { gte: now } };
    if (aging === "1_7") return { ...active, dueDate: { lt: now, gte: daysAgo(7) } };
    if (aging === "8_30") return { ...active, dueDate: { lt: daysAgo(7), gte: daysAgo(30) } };
    if (aging === "31_60") return { ...active, dueDate: { lt: daysAgo(30), gte: daysAgo(60) } };
    if (aging === "60_plus") return { ...active, dueDate: { lt: daysAgo(60) } };
    return {};
  }

  private followUpWhere(followUp: string | undefined, start: Date, end: Date): Prisma.DebtWhereInput {
    if (followUp === "today") return { nextFollowUpAt: { gte: start, lte: end } };
    if (followUp === "overdue") return { nextFollowUpAt: { lt: start } };
    if (followUp === "upcoming") return { nextFollowUpAt: { gt: end } };
    return {};
  }

  private dueRangeWhere(range: string | undefined, startOfToday: Date, endOfToday: Date): Prisma.DebtWhereInput {
    if (!range) return {};
    const start = new Date(startOfToday);
    const end = new Date(endOfToday);
    if (range === "today") return { dueDate: { gte: start, lte: end } };
    if (range === "tomorrow") {
      start.setDate(start.getDate() + 1);
      end.setDate(end.getDate() + 1);
      return { dueDate: { gte: start, lte: end } };
    }
    if (range === "next_7_days") {
      end.setDate(end.getDate() + 6);
      return { dueDate: { gte: start, lte: end } };
    }
    if (range === "this_month") {
      start.setDate(1);
      end.setMonth(end.getMonth() + 1, 0);
      end.setHours(23, 59, 59, 999);
      return { dueDate: { gte: start, lte: end } };
    }
    return {};
  }

  private exactDueDateWhere(dueDate: string | undefined): Prisma.DebtWhereInput {
    if (!dueDate) return {};
    const start = new Date(`${dueDate}T00:00:00`);
    const end = new Date(`${dueDate}T23:59:59.999`);
    return Number.isNaN(start.getTime()) ? {} : { dueDate: { gte: start, lte: end } };
  }
}
