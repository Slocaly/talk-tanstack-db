import { Link, useParams } from '@tanstack/react-router';
import { useRecipeByIdQuery } from '@/hooks/useRecipeByIdQuery';
import { useRecipeDetailIngredientsCatalogQuery } from '@/hooks/useRecipeDetailIngredientsCatalogQuery';
import { RecipeDetailPage } from '@/pages/RecipeDetailPage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import { useMemo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function RecipeDetailPageQueryProvider() {
  const { id } = useParams({ strict: false });
  const prefix = useAppPathPrefix();
  const { data: recipe, isLoading: isPending, error } = useRecipeByIdQuery('/tsq', id);
  const { data: ingredients } = useRecipeDetailIngredientsCatalogQuery('/tsq');

  const ingredientInRecipe = useMemo(() => {
    return ingredients?.filter((ingredient) => recipe?.ingredients.some((ri) => ri.ingredientId === ingredient.id));
  }, [recipe, ingredients]);

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (!recipe) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recette introuvable</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary">
            <Link to={`${prefix}/recipes`}>Retour aux recettes</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <RecipeDetailPage recipe={recipe} ingredients={ingredientInRecipe ?? []} isPending={isPending} error={error} />
  );
}
