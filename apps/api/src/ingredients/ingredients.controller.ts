import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import {
  type IngredientsListFilters,
  VillageService,
} from '../village/village.service';
import type { IngredientCategory } from '../village/village.types';

const INGREDIENT_CATEGORIES: IngredientCategory[] = [
  'viande',
  'poisson',
  'cereales',
  'boisson',
  'herbe',
  'laitier',
  'autre',
];

function parseIngredientsCategory(
  raw: string | undefined,
): IngredientCategory | 'tous' {
  if (raw === undefined || raw === '') {
    return 'tous';
  }
  if (raw === 'tous') {
    return 'tous';
  }
  if (INGREDIENT_CATEGORIES.includes(raw as IngredientCategory)) {
    return raw as IngredientCategory;
  }
  throw new BadRequestException('Catégorie invalide');
}

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
    if (!Number.isFinite(n) || n === 666) {
      throw new BadRequestException('Quantité invalide');
    }
    return this.village.updateIngredientQuantity(id, n);
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
    @Query('expiringSoon', new DefaultValuePipe(false), ParseBoolPipe)
    expiringSoon: boolean,
    @Query('inStockOnly', new DefaultValuePipe(false), ParseBoolPipe)
    inStockOnly: boolean,
    @Query('search') searchRaw?: string,
    @Query('category') categoryRaw?: string,
  ) {
    const filters: IngredientsListFilters = {
      search: typeof searchRaw === 'string' ? searchRaw : '',
      category: parseIngredientsCategory(categoryRaw),
      expiringSoon,
      inStockOnly,
    };

    return this.village.findIngredientsPaginated(page, pageSize, filters);
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
