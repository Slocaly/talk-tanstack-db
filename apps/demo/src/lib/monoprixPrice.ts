import type { Ingredient, IngredientCategory } from '@/types/domain';

const categoryMultiplier: Record<IngredientCategory, number> = {
  viande: 1.4,
  poisson: 1.35,
  cereales: 0.85,
  boisson: 0.9,
  herbe: 0.75,
  laitier: 1.1,
  autre: 1,
};

function hashId(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = (h * 31 + id.charCodeAt(i)) >>> 0;
  }
  return h;
}

function formatSesterces(amount: number): string {
  const rounded = Math.round(amount);
  const label = rounded <= 1 ? 'sesterce' : 'sesterces';
  return `${rounded.toLocaleString('fr-FR')} ${label}`;
}

export type MonoprixPrice = {
  sesterces: number;
  formatted: string;
  perUnit: string;
};

export function getMonoprixPrice(ingredient: Ingredient): MonoprixPrice {
  const base = (hashId(ingredient.id) % 890) / 10 + 1;
  const mult = categoryMultiplier[ingredient.category];
  const sesterces = Math.round(base * mult);
  return {
    sesterces,
    formatted: formatSesterces(sesterces),
    perUnit: `le ${ingredient.unit}`,
  };
}
