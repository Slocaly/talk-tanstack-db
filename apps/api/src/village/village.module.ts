import { Module } from '@nestjs/common';
import {
  TsdbDashboardController,
  TsqDashboardController,
} from '../dashboard/dashboard.controller';
import {
  TsdbIngredientsController,
  TsqIngredientsController,
} from '../ingredients/ingredients.controller';
import {
  TsdbRecipesController,
  TsqRecipesController,
} from '../recipes/recipes.controller';
import { VillageService } from './village.service';

@Module({
  controllers: [
    TsqIngredientsController,
    TsdbIngredientsController,
    TsqRecipesController,
    TsdbRecipesController,
    TsqDashboardController,
    TsdbDashboardController,
  ],
  providers: [VillageService],
})
export class VillageModule {}
