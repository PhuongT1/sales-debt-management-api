import { Controller, Delete, Get, Param, Query } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller("payments")
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  list(@Query() query: Record<string, string | undefined>) {
    return this.paymentsService.list(query);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentsService.remove(id);
  }
}
