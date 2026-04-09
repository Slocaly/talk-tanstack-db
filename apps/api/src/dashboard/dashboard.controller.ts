import { Controller, Get } from '@nestjs/common';
import { VillageService } from '../village/village.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly village: VillageService) {}

  @Get('summary')
  summary() {
    return this.village.getDashboardSummary();
  }
}
