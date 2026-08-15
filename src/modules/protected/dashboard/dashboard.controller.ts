import { Controller, Get } from '@nestjs/common';
import { ProtectedApi } from '@auth/auth-api.decorator';
import { DashboardService } from './dashboard.service';

@ProtectedApi()
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  get() {
    return this.dashboardService.get();
  }
}
