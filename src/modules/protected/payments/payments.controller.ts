import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { ProtectedApi } from '@auth/auth-api.decorator';
import { Roles } from '@auth/roles.decorator';
import { UserRole } from '@generated/prisma';
import { PaymentsService } from './payments.service';
import { QueryPaymentsDto } from './dto/query-payments.dto';

@ProtectedApi()
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  list(@Query() query: QueryPaymentsDto) {
    return this.paymentsService.list(query);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.ACCOUNTANT)
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(id);
  }
}
