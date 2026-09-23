import { ingredientCollection } from '@/collections/ingredient-collection';
import { recipeCollection } from '@/collections/recipe-collection';
import { useRecipesFilters } from '@/hooks/useRecipesFilters';
import type { CreateRecipeInput } from '@/lib/api';
import { t } from '@/i18n';
import { slugifyRecipeName } from '@/lib/recipeId';
import { RecipesPage } from '@/pages/RecipesPage';
import { ilike, useLiveQuery } from '@tanstack/react-db';
import { useState } from 'react';
import type { Recipe } from '@/types/domain';

export function RecipesPageDBProvider() {
  const { filters: { page, pageSize, search } } = useRecipesFilters();
  const [addRecipeError, setAddRecipeError] = useState<Error | null>(null);
  const [isAddingRecipe, setIsAddingRecipe] = useState(false);

  const { data: recipes, isLoading: isPending, isError: error } = useLiveQuery((q) =>
    q.from({ recipes: recipeCollection })
      .where(({ recipes }) => ilike(recipes.name, `%${search}%`))
      .orderBy(({ recipes }) => recipes.id, "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize),
    [page, pageSize, search],
  );

  const { data: ingredients = [] } = useLiveQuery((q) =>
    q.from({ ingredients: ingredientCollection }).orderBy(({ ingredients }) => ingredients.name, 'asc'),
  );

  const handleAddRecipe = async (input: CreateRecipeInput) => {
    setIsAddingRecipe(true);
    setAddRecipeError(null);
    const draft: Recipe = {
      id: input.id ?? slugifyRecipeName(input.name),
      name: input.name,
      description: input.description,
      ingredients: input.ingredients ?? [],
    };
    try {
      const tx = recipeCollection.insert(draft);
      await tx.isPersisted.promise;
    } catch (err) {
      const next =
        err instanceof Error ? err : new Error(t('recipes.createError'));
      setAddRecipeError(next);
      throw next;
    } finally {
      setIsAddingRecipe(false);
    }
  };

  return (
    <RecipesPage
      recipes={recipes}
      isPending={isPending}
      error={error ? new Error(t('recipes.fetchError')) : null}
      refetch={() => { }}
      totalItems={recipes?.length ?? 0}
      totalPages={100}
      ingredientsForAdd={ingredients}
      onAddRecipe={handleAddRecipe}
      isAddingRecipe={isAddingRecipe}
      addRecipeError={addRecipeError}
    />
  );
}
