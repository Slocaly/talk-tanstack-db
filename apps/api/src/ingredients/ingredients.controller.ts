import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { VillageService } from '../village/village.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly village: VillageService) {}

  @Get()
  list() {
    return this.village.findAllIngredients();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.village.findIngredient(id);
  }

  @Patch(':id/quantity')
  updateQuantity(@Param('id') id: string, @Body() body: { quantity?: unknown }) {
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
