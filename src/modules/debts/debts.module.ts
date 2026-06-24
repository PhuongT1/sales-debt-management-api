import { Module } from "@nestjs/common";
import { DebtsController } from "./debts.controller";
import { DebtsService } from "./debts.service";
import { PaymentsModule } from "../payments/payments.module";

@Module({
  imports: [PaymentsModule],
  controllers: [DebtsController],
  providers: [DebtsService],
  exports: [DebtsService],
})
export class DebtsModule {}
