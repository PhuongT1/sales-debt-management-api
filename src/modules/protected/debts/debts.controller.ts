import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProtectedApi } from '@auth/auth-api.decorator';
import { Roles } from '@auth/roles.decorator';
import { UserRole } from '@generated/prisma';
import { DebtsService } from './debts.service';
import { PaymentsService } from '@modules/protected/payments/payments.service';
import { CreateDebtDto } from './dto/create-debt.dto';
import { QueryDebtsDto } from './dto/query-debts.dto';
import { UpdateDebtCollectionDto } from './dto/update-debt-collection.dto';
import { CreatePaymentDto } from '@modules/protected/payments/dto/create-payment.dto';

@ProtectedApi()
@Controller('debts')
export class DebtsController {
  constructor(
    private readonly debtsService: DebtsService,
    private readonly paymentsService: PaymentsService,
  ) {}

  @Get()
  list(@Query() query: QueryDebtsDto) {
    return this.debtsService.list(query);
  }

  @Post()
  @Roles(UserRole.ADMIN, UserRole.ACCOUNTANT)
  create(@Body() body: CreateDebtDto) {
    return this.debtsService.create(body);
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return this.debtsService.detail(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.ACCOUNTANT)
  updateCollection(@Param('id') id: string, @Body() body: UpdateDebtCollectionDto) {
    return this.debtsService.updateCollection(id, body);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.ACCOUNTANT)
  cancel(@Param('id') id: string) {
    return this.debtsService.cancel(id);
  }

  @Post(':id/payments')
  @Roles(UserRole.ADMIN, UserRole.ACCOUNTANT)
  createPayment(@Param('id') id: string, @Body() body: CreatePaymentDto) {
    return this.paymentsService.create(id, body);
  }
}
