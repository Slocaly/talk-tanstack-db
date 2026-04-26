import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { VillageService } from '../village/village.service';

abstract class IngredientsControllerBase {
  constructor(protected readonly village: VillageService) {}

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.village.findIngredient(id);
  }

  @Patch(':id/quantity')
  updateQuantity(
    @Param('id') id: string,
    @Body() body: { quantity?: unknown },
  ) {
    const raw = body?.quantity;
    const n =
      typeof raw === 'number'
        ? raw
        : typeof raw === 'string'
          ? Number.parseFloat(raw)
          : NaN;
    if (!Number.isFinite(n)) {
      throw new BadRequestException('Quantité invalide');
    }
    return this.village.updateIngredientQuantity(id, n);
  }
}

@Controller('ingredients')
export class IngredientsController extends IngredientsControllerBase {
  constructor(village: VillageService) {
    super(village);
  }

  @Get()
  list() {
    return this.village.findAllIngredients();
  }
}

@Controller('tsq/ingredients')
export class TsqIngredientsController extends IngredientsControllerBase {
  constructor(village: VillageService) {
    super(village);
  }

  @Get()
  list(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('pageSize', new DefaultValuePipe(20), ParseIntPipe) pageSize: number,
  ) {
    return this.village.findIngredientsPaginated(page, pageSize);
  }
}

@Controller('tsdb/ingredients')
export class TsdbIngredientsController extends IngredientsControllerBase {
  constructor(village: VillageService) {
    super(village);
  }

  @Get()
  list() {
    return this.village.findAllIngredients();
  }
}
