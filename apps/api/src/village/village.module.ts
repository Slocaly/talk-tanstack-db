import { Module } from '@nestjs/common';
import {
  DashboardController,
  TsdbDashboardController,
  TsqDashboardController,
} from '../dashboard/dashboard.controller';
import {
  IngredientsController,
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
    IngredientsController,
    TsqIngredientsController,
    TsdbIngredientsController,
    RecipesController,
    TsqRecipesController,
    TsdbRecipesController,
    DashboardController,
    TsqDashboardController,
    TsdbDashboardController,
  ],
  providers: [VillageService],
})
export class VillageModule {}
