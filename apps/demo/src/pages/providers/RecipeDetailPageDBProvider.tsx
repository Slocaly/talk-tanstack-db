import { Link, useParams } from '@tanstack/react-router';
import { RecipeDetailPage } from '@/pages/RecipeDetailPage';
import { eq, inArray, useLiveQuery } from '@tanstack/react-db';
import { recipeCollection } from '@/collections/recipe-collection';
import { ingredientCollection } from '@/collections/ingredient-collection';
import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { t } from '@/i18n';
import { useAppPathPrefix } from '@/lib/appPathPrefix';

export function RecipeDetailPageDBProvider() {
  const { id } = useParams({ strict: false });
  const prefix = useAppPathPrefix();

  const { data: recipe, isLoading, isError } = useLiveQuery((q) =>
    q
      .from({ recipes: recipeCollection })
      .where(({ recipes }) => eq(recipes.id, id))
      .findOne(),
    [id]);

  const recipeIngredients = useMemo(() => {
    return recipe?.ingredients.map(({ ingredientId }) => ingredientId);
  }, [recipe]);

  const { data: ingredients } = useLiveQuery((q) =>
    q
      .from({ ingredients: ingredientCollection })
      .where(({ ingredients }) => inArray(ingredients.id, recipeIngredients)),
    [recipeIngredients]);

  if (!recipe) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('recipes.notFoundTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary">
            <Link to={`${prefix}/recipes`}>{t('recipes.returnToList')}</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <RecipeDetailPage
      recipe={recipe}
      ingredients={ingredients ?? []}
      isPending={isLoading}
      error={isError ? new Error(t('recipes.fetchOneError')) : null}
    />
  );
}
