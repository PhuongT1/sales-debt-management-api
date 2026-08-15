import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { ProtectedApi } from '@auth/auth-api.decorator';

@ProtectedApi()
@Controller('audit-logs')
export class AuditLogsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.auditLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
      include: { actor: { select: { id: true, name: true, email: true } } },
    });
  }
}
