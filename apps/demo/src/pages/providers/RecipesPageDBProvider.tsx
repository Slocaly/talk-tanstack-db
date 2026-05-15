import { recipeCollection } from '@/collections/recipe-collection';
import { useRecipesFilters } from '@/hooks/useRecipesFilters';
import { RecipesPage } from '@/pages/RecipesPage';
import { ilike, useLiveQuery } from '@tanstack/react-db';

export function RecipesPageDBProvider() {
  const { filters: { page, pageSize, search } } = useRecipesFilters();

  const { data: recipes, isLoading: isPending, isError: error } = useLiveQuery((q) =>
    q.from({ recipes: recipeCollection })
      .where(({ recipes }) => ilike(recipes.name, `%${search}%`))
      .orderBy(({ recipes }) => recipes.id, "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize),
    [page, pageSize, search],
  );

  return (
    <RecipesPage
      recipes={recipes}
      isPending={isPending}
      error={error ? new Error('Erreur lors de la récupération des recettes') : null}
      refetch={() => { }}
      totalItems={recipes?.length ?? 0}
      totalPages={100}
    />
  );
}
