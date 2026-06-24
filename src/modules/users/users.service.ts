import { Injectable } from "@nestjs/common";
import { UserRole, UserStatus } from "../../generated/prisma";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, email: true, phone: true, role: true, status: true, createdAt: true },
    });
  }

  update(id: string, body: Record<string, unknown>) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: body.name == null ? undefined : String(body.name),
        phone: body.phone == null ? undefined : String(body.phone),
        role: body.role as UserRole | undefined,
        status: body.status as UserStatus | undefined,
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
