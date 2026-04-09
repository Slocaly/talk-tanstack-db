import { Controller, Get, Param } from '@nestjs/common';
import { VillageService } from '../village/village.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly village: VillageService) {}

  @Get()
  list() {
    return this.village.findAllRecipes();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.village.findRecipe(id);
  }
}
