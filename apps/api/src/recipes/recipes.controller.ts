import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  type CreateRecipeInput,
  VillageService,
} from '../village/village.service';
import type { RecipeIngredient } from '../village/village.types';

function parseCreateRecipeBody(body: unknown): CreateRecipeInput {
  if (body === null || typeof body !== 'object') {
    throw new BadRequestException('Corps de requête invalide');
  }
  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === 'string' ? raw.name : '';
  const description =
    typeof raw.description === 'string' ? raw.description : undefined;
  const id = typeof raw.id === 'string' ? raw.id : undefined;

  let ingredients: RecipeIngredient[] | undefined;
  if (raw.ingredients !== undefined) {
    if (!Array.isArray(raw.ingredients)) {
      throw new BadRequestException('Liste d’ingrédients invalide');
    }
    ingredients = raw.ingredients.map((line) => {
      if (line === null || typeof line !== 'object') {
        throw new BadRequestException('Ligne d’ingrédient invalide');
      }
      const row = line as Record<string, unknown>;
      const ingredientId =
        typeof row.ingredientId === 'string' ? row.ingredientId : '';
      const amount =
        typeof row.amount === 'number'
          ? row.amount
          : typeof row.amount === 'string'
            ? Number.parseFloat(row.amount)
            : NaN;
      if (!ingredientId) {
        throw new BadRequestException('Identifiant d’ingrédient requis');
      }
      if (!Number.isFinite(amount)) {
        throw new BadRequestException('Quantité invalide');
      }
      return { ingredientId, amount };
    });
  }

  return { id, name, description, ingredients };
}

abstract class RecipesControllerBase {
  constructor(protected readonly village: VillageService) {}

  @Post()
  create(@Body() body: unknown) {
    return this.village.createRecipe(parseCreateRecipeBody(body));
  }

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
