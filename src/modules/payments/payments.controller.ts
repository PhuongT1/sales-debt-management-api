import { Controller, Delete, Get, Param, Query } from "@nestjs/common";
import { PaymentsService } from "./payments.service";
import { QueryPaymentsDto } from "./dto/query-payments.dto";

@Controller("payments")
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  list(@Query() query: QueryPaymentsDto) {
    return this.paymentsService.list(query);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentsService.remove(id);
  }
}
