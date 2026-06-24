import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { PartiesModule } from "./modules/parties/parties.module";
import { DebtsModule } from "./modules/debts/debts.module";
import { PaymentsModule } from "./modules/payments/payments.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { ReportsModule } from "./modules/reports/reports.module";
import { ExportsModule } from "./modules/exports/exports.module";
import { ImportsModule } from "./modules/imports/imports.module";
import { AuditLogsModule } from "./modules/audit-logs/audit-logs.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    PartiesModule,
    DebtsModule,
    PaymentsModule,
    DashboardModule,
    ReportsModule,
    ExportsModule,
    ImportsModule,
    AuditLogsModule,
  ],
})
export class AppModule {}
