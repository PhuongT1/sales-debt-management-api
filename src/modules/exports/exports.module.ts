import { Module } from "@nestjs/common";
import { ExportsController } from "./exports.controller";
import { DebtsModule } from "../debts/debts.module";

@Module({
  imports: [DebtsModule],
  controllers: [ExportsController],
})
export class ExportsModule {}
