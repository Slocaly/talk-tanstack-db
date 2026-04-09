import { Module } from '@nestjs/common';
import { DashboardController } from '../dashboard/dashboard.controller';
import { IngredientsController } from '../ingredients/ingredients.controller';
import { RecipesController } from '../recipes/recipes.controller';
import { VillageService } from './village.service';

@Module({
  controllers: [IngredientsController, RecipesController, DashboardController],
  providers: [VillageService],
})
export class VillageModule {}
