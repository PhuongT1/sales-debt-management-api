import { BadRequestException, Injectable } from "@nestjs/common";
import { PartyType, Prisma } from "../../generated/prisma";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class PartiesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: Record<string, string | undefined>) {
    const page = Math.max(1, Number(query.page ?? 1));
    const pageSize = Math.min(100, Math.max(1, Number(query.pageSize ?? 20)));
    const where: Prisma.PartyWhereInput = {
      isActive: true,
      ...(query.type ? { type: query.type as PartyType } : {}),
      ...(query.assignedToId ? { assignedToId: query.assignedToId } : {}),
      ...(query.createdRange ? { createdAt: this.createdRange(query.createdRange) } : {}),
      ...(query.q
        ? {
            OR: [
              { name: { contains: query.q, mode: "insensitive" } },
              { code: { contains: query.q, mode: "insensitive" } },
              { phone: { contains: query.q, mode: "insensitive" } },
              { taxCode: { contains: query.q, mode: "insensitive" } },
            ],
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.party.findMany({
        where,
        orderBy: [{ createdAt: "desc" }],
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          assignedTo: { select: { id: true, name: true, email: true } },
          _count: { select: { debts: true } },
        },
      }),
      this.prisma.party.count({ where }),
    ]);

    return { items, total, page, pageSize };
  }

  detail(id: string) {
    return this.prisma.party.findUniqueOrThrow({
      where: { id },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        debts: { orderBy: { dueDate: "asc" } },
      },
    });
  }

  create(input: Record<string, unknown>) {
    return this.prisma.party.create({
      data: this.toPartyData(input),
    });
  }

  update(id: string, input: Record<string, unknown>) {
    return this.prisma.party.update({
      where: { id },
      data: this.toPartyData(input),
    });
  }

  async deactivate(id: string) {
    const activeDebtCount = await this.prisma.debt.count({
      where: { partyId: id, status: { notIn: ["PAID", "CANCELLED"] } },
    });

    if (activeDebtCount > 0) {
      throw new BadRequestException("Không thể xóa khách còn công nợ chưa tất toán");
    }

    return this.prisma.party.update({ where: { id }, data: { isActive: false } });
  }

  private toPartyData(input: Record<string, unknown>): Prisma.PartyUncheckedCreateInput {
    return {
      type: (input.type as PartyType) ?? "CUSTOMER",
      code: this.nullable(input.code),
      name: String(input.name ?? "").trim(),
      phone: this.nullable(input.phone),
      email: this.nullable(input.email),
      taxCode: this.nullable(input.taxCode),
      address: this.nullable(input.address),
      note: this.nullable(input.note),
      creditLimit: input.creditLimit === "" || input.creditLimit == null ? null : new Prisma.Decimal(String(input.creditLimit)),
      assignedToId: this.nullable(input.assignedToId),
    };
  }

  private nullable(value: unknown) {
    const text = String(value ?? "").trim();
    return text.length > 0 ? text : null;
  }

  private createdRange(range: string): Prisma.DateTimeFilter | undefined {
    const now = new Date();
    const start = new Date(now);

    if (range === "today") {
      start.setHours(0, 0, 0, 0);
      return { gte: start };
    }

    if (range === "last_7_days") {
      start.setDate(start.getDate() - 6);
      start.setHours(0, 0, 0, 0);
      return { gte: start };
    }

    if (range === "this_month") {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
      return { gte: start };
    }

    return undefined;
  }
}
