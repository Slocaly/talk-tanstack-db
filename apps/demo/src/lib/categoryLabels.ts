import type { IngredientCategory } from '@/types/domain';
import { t } from '@/i18n';

export const categoryLabels: Record<IngredientCategory, string> = {
  viande: t('categories.viande'),
  poisson: t('categories.poisson'),
  cereales: t('categories.cereales'),
  boisson: t('categories.boisson'),
  herbe: t('categories.herbe'),
  laitier: t('categories.laitier'),
  autre: t('categories.autre'),
};
