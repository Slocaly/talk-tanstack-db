import type { IngredientCategory } from '@/types/domain';

export const categoryLabels: Record<IngredientCategory, string> = {
  viande: 'Viande & gibier',
  poisson: 'Poisson',
  cereales: 'Céréales & pain',
  boisson: 'Boissons',
  herbe: 'Herbes & baies',
  laitier: 'Laitier',
  autre: 'Autre',
};
