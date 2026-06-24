import { Module } from "@nestjs/common";
import { ReportsController } from "./reports.controller";
import { ReportsService } from "./reports.service";
import { DebtsModule } from "../debts/debts.module";

@Module({
  imports: [DebtsModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
