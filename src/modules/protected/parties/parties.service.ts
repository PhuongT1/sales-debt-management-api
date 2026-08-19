import { BadRequestException, Injectable } from '@nestjs/common';
import { getPagination, paginate } from '@common/utils/pagination.util';
import { PartyType, Prisma } from '@generated/prisma';
import { PrismaService } from '@database/prisma.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { QueryPartiesDto } from './dto/query-parties.dto';
import { UpdatePartyDto } from './dto/update-party.dto';

@Injectable()
export class PartiesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: QueryPartiesDto) {
    const pagination = getPagination(query);
    const where = this.buildListWhere(query);

    const [items, total] = await this.prisma.$transaction([
      this.prisma.party.findMany({
        where,
        orderBy: [{ createdAt: 'desc' }],
        skip: pagination.skip,
        take: pagination.take,
        include: {
          assignedTo: { select: { id: true, name: true, email: true } },
          _count: { select: { debts: true } },
        },
      }),
      this.prisma.party.count({ where }),
    ]);

    return paginate(items, total, pagination);
  }

  detail(id: string) {
    return this.prisma.party.findUniqueOrThrow({
      where: { id },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        debts: { orderBy: { dueDate: 'asc' } },
      },
    });
  }

  create(input: CreatePartyDto) {
    return this.prisma.party.create({
      data: this.toPartyData(input),
    });
  }

  update(id: string, input: UpdatePartyDto) {
    return this.prisma.party.update({
      where: { id },
      data: this.toPartyData(input),
    });
  }

  async deactivate(id: string) {
    const activeDebtCount = await this.prisma.debt.count({
      where: { partyId: id, status: { notIn: ['PAID', 'CANCELLED'] } },
    });

    if (activeDebtCount > 0) {
      throw new BadRequestException('Không thể xóa khách còn công nợ chưa tất toán');
    }

    return this.prisma.party.update({ where: { id }, data: { isActive: false } });
  }

  private toPartyData(input: CreatePartyDto | UpdatePartyDto): Prisma.PartyUncheckedCreateInput {
    return {
      type: (input.type as PartyType) ?? 'CUSTOMER',
      code: this.nullable(input.code),
      name: String(input.name ?? '').trim(),
      phone: this.nullable(input.phone),
      email: this.nullable(input.email),
      taxCode: this.nullable(input.taxCode),
      address: this.nullable(input.address),
      note: this.nullable(input.note),
      creditLimit:
        input.creditLimit === '' || input.creditLimit == null
          ? null
          : new Prisma.Decimal(String(input.creditLimit)),
      assignedToId: this.nullable(input.assignedToId),
    };
  }

  private nullable(value: unknown) {
    const text = String(value ?? '').trim();
    return text.length > 0 ? text : null;
  }

  private buildListWhere(query: QueryPartiesDto): Prisma.PartyWhereInput {
    const createdAt = this.createdAtFilter(query);

    return {
      isActive: true,
      ...(query.type ? { type: query.type } : {}),
      ...(query.assignedToId ? { assignedToId: query.assignedToId } : {}),
      ...(createdAt ? { createdAt } : {}),
      ...(query.q
        ? {
            OR: [
              { name: { contains: query.q, mode: 'insensitive' } },
              { code: { contains: query.q, mode: 'insensitive' } },
              { phone: { contains: query.q, mode: 'insensitive' } },
              { taxCode: { contains: query.q, mode: 'insensitive' } },
            ],
          }
        : {}),
    };
  }

  private createdRange(range: string): Prisma.DateTimeFilter | undefined {
    const now = new Date();
    const start = new Date(now);

    if (range === 'today') {
      start.setHours(0, 0, 0, 0);
      return { gte: start };
    }

    if (range === 'last_7_days') {
      start.setDate(start.getDate() - 6);
      start.setHours(0, 0, 0, 0);
      return { gte: start };
    }

    if (range === 'this_month') {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
      return { gte: start };
    }

    return undefined;
  }

  private createdAtFilter(query: QueryPartiesDto): Prisma.DateTimeFilter | undefined {
    if (!query.createdFrom && !query.createdTo) {
      return query.createdRange ? this.createdRange(query.createdRange) : undefined;
    }

    const from = query.createdFrom ? new Date(`${query.createdFrom}T00:00:00`) : undefined;
    const to = query.createdTo ? new Date(`${query.createdTo}T23:59:59.999`) : undefined;

    if (from && to && from > to) {
      throw new BadRequestException('Ngày bắt đầu không được sau ngày kết thúc');
    }

    return { ...(from ? { gte: from } : {}), ...(to ? { lte: to } : {}) };
  }
}
