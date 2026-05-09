import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { VillageService } from '../village/village.service';

abstract class RecipesControllerBase {
  constructor(protected readonly village: VillageService) {}

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.village.findRecipe(id);
  }
}

@Controller('tsq/recipes')
export class TsqRecipesController extends RecipesControllerBase {
  constructor(village: VillageService) {
    super(village);
  }

  @Get()
  list(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('pageSize', new DefaultValuePipe(20), ParseIntPipe) pageSize: number,
  ) {
    return this.village.findRecipesPaginated(page, pageSize);
  }
}

@Controller('tsdb/recipes')
export class TsdbRecipesController extends RecipesControllerBase {
  constructor(village: VillageService) {
    super(village);
  }

  @Get()
  list() {
    return this.village.findAllRecipes();
  }
}
