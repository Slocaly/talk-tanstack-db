import { useCreateRecipeMutation } from '@/hooks/useCreateRecipeMutation';
import { useRecipeDetailIngredientsCatalogQuery } from '@/hooks/useRecipeDetailIngredientsCatalogQuery';
import { useRecipesQuery } from '@/hooks/useRecipesCatalogQuery';
import type { CreateRecipeInput } from '@/lib/api';
import { RecipesPage } from '@/pages/RecipesPage';

export function RecipesPageQueryProvider() {
  const { data, isPending, error, refetch } = useRecipesQuery('/tsq');
  const { data: ingredients = [] } =
    useRecipeDetailIngredientsCatalogQuery('/tsq');
  const createRecipeMutation = useCreateRecipeMutation('/tsq');

  const handleAddRecipe = async (input: CreateRecipeInput) => {
    await createRecipeMutation.mutateAsync(input);
  };

  return (
    <RecipesPage
      recipes={data?.items ?? []}
      isPending={isPending}
      error={error}
      refetch={refetch}
      totalItems={data?.totalItems ?? 0}
      totalPages={data?.totalPages ?? 0}
      ingredientsForAdd={ingredients}
      onAddRecipe={handleAddRecipe}
      isAddingRecipe={createRecipeMutation.isPending}
      addRecipeError={createRecipeMutation.error}
    />
  );
}
