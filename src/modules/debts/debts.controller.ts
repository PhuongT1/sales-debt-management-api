import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { DebtsService } from "./debts.service";
import { PaymentsService } from "../payments/payments.service";

@Controller("debts")
export class DebtsController {
  constructor(
    private readonly debtsService: DebtsService,
    private readonly paymentsService: PaymentsService,
  ) {}

  @Get()
  list(@Query() query: Record<string, string | undefined>) {
    return this.debtsService.list(query);
  }

  @Post()
  create(@Body() body: Record<string, unknown>) {
    return this.debtsService.create(body);
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    return this.debtsService.detail(id);
  }

  @Patch(":id")
  updateCollection(@Param("id") id: string, @Body() body: Record<string, unknown>) {
    return this.debtsService.updateCollection(id, body);
  }

  @Delete(":id")
  cancel(@Param("id") id: string) {
    return this.debtsService.cancel(id);
  }

  @Post(":id/payments")
  createPayment(@Param("id") id: string, @Body() body: Record<string, unknown>) {
    return this.paymentsService.create(id, body);
  }
}
