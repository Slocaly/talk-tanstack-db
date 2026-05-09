import { Controller, Get } from '@nestjs/common';
import { VillageService } from '../village/village.service';

abstract class DashboardControllerBase {
  constructor(protected readonly village: VillageService) {}

  @Get('summary')
  summary() {
    return this.village.getDashboardSummary();
  }
}

@Controller('dashboard')
export class DashboardController extends DashboardControllerBase {
  constructor(village: VillageService) {
    super(village);
  }
}

@Controller('tsq/dashboard')
export class TsqDashboardController extends DashboardControllerBase {
  constructor(village: VillageService) {
    super(village);
  }
}

@Controller('tsdb/dashboard')
export class TsdbDashboardController extends DashboardControllerBase {
  constructor(village: VillageService) {
    super(village);
  }
}

