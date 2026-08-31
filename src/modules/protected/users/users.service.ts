import { Injectable } from '@nestjs/common';
import { Prisma, UserStatus } from '@generated/prisma';
import { PrismaService } from '@database/prisma.service';
import { getPagination, paginate } from '@common/utils/pagination.util';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUsersDto } from './dto/query-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: QueryUsersDto) {
    const pagination = getPagination(query);
    const where: Prisma.UserWhereInput = {
      role: query.role,
      status: query.status,
      ...(query.q
        ? {
            OR: [
              { name: { contains: query.q, mode: 'insensitive' } },
              { email: { contains: query.q, mode: 'insensitive' } },
              { phone: { contains: query.q, mode: 'insensitive' } },
            ],
          }
        : {}),
    };
    const [items, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: pagination.skip,
        take: pagination.take,
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          status: true,
          createdAt: true,
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return paginate(items, total, pagination);
  }

  options() {
    return this.prisma.user.findMany({
      where: { status: UserStatus.ACTIVE },
      orderBy: [{ name: 'asc' }, { email: 'asc' }],
      select: { id: true, name: true, email: true, role: true, status: true },
    });
  }

  update(id: string, body: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: body.name,
        phone: body.phone,
        role: body.role,
        status: body.status,
      },
      select: { id: true, name: true, email: true, phone: true, role: true, status: true },
    });
  }

  deactivate(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { status: UserStatus.INACTIVE },
      select: { id: true, name: true, email: true, phone: true, role: true, status: true },
    });
  }
}
