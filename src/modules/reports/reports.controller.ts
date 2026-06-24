import { Controller, Get, Query } from "@nestjs/common";
import { ReportsService } from "./reports.service";

@Controller("reports")
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get("aging")
  aging(@Query() query: Record<string, string | undefined>) {
    return this.reportsService.aging(query);
  }
}
