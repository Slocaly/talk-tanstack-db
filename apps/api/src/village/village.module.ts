import { Module } from '@nestjs/common';
import {
  DashboardController,
  TsqDashboardController,
} from '../dashboard/dashboard.controller';
import {
  TsdbIngredientsController,
  TsqIngredientsController,
} from '../ingredients/ingredients.controller';
import {
  RecipesController,
  TsdbRecipesController,
  TsqRecipesController,
} from '../recipes/recipes.controller';
import { VillageService } from './village.service';

@Module({
  controllers: [
    TsqIngredientsController,
    TsdbIngredientsController,
    RecipesController,
    TsqRecipesController,
    TsdbRecipesController,
    DashboardController,
    TsqDashboardController,
  ],
  providers: [VillageService],
})
export class VillageModule {}
