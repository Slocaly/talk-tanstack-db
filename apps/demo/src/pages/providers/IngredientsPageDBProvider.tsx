import { ingredientCollection } from '@/collections/ingredient-collection';
import { useIngredientsFilters } from '@/hooks/useIngredientsFilters';
import { IngredientsPage } from '@/pages/IngredientsPage';
import { gt, useLiveQuery, ilike, eq } from '@tanstack/react-db';

export function IngredientsPageDBProvider() {
  const {
    filters: { search, category, inStockOnly, page, pageSize },
  } = useIngredientsFilters();

  const { data: ingredients } = useLiveQuery((q) =>
    q
      .from({ ingredients: ingredientCollection })
      .where(({ ingredients }) => ilike(ingredients.name, `%${search}%`))
      .where(({ ingredients }) => category !== 'tous' ? eq(category, ingredients.category) : eq(true, true))
      .where(({ ingredients }) => inStockOnly ? gt(ingredients.quantity, 0) : eq(true, true))
      .orderBy(({ ingredients }) => ingredients.id, "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize),
    [page, pageSize, search, category, inStockOnly],
  );

  return (
    <IngredientsPage
      ingredients={ingredients ?? []}
      totalItems={ingredients?.length ?? 0}
      totalPages={100}
      isPending={false}
      refetch={() => { }}
      error={null}
    />
  );
}

// Si vrai alors condition, sinon true