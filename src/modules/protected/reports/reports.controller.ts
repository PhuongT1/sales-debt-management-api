import { Controller, Get, Query } from '@nestjs/common';
import { ProtectedApi } from '@auth/auth-api.decorator';
import { ReportsService } from './reports.service';

@ProtectedApi()
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('aging')
  aging(@Query() query: Record<string, string | undefined>) {
    return this.reportsService.aging(query);
  }
}
