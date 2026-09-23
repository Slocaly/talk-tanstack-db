import { useEffect, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import type { Ingredient, Recipe } from '@/types/domain';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { t } from '@/i18n';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import { Badge } from '@/components/ui/badge';

export type RecipeDetailPageProps = {
  recipe: Recipe;
  ingredients: Ingredient[];
  isPending: boolean;
  error: Error | null;
};

export function RecipeDetailPage({
  recipe,
  ingredients,
  isPending,
  error,
}: RecipeDetailPageProps) {
  const prefix = useAppPathPrefix();
  const recipesListTo = `${prefix}/recipes` as const;
  const ingredientDetailTo = `${prefix}/ingredients/$id` as const;

  useEffect(() => {
    if (recipe) {
      document.title = t('documentTitle.recipe', { name: recipe.name });
    }
  }, [recipe]);

  const ingredientWithInfo = useMemo(
    () =>
      ingredients.map((ingredient) => {
        const ingredientInRecipe = recipe.ingredients.find(
          (ri) => ri.ingredientId === ingredient.id,
        );
        const ingredientAmount = ingredientInRecipe?.amount ?? 0;
        const stock = ingredient.quantity;
        const ok = stock >= ingredientAmount;
        return { ...ingredient, ingredientAmount, stock, ok };
      }),
    [ingredients, recipe],
  );

  const makable = ingredientWithInfo.every((ingredient) => ingredient.ok);

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('common.error')}</CardTitle>
          <CardDescription>
            {error instanceof Error ? error.message : t('common.loadFailed')}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Button asChild variant="outline" size="sm" className="mb-3">
          <Link to={recipesListTo}>{t('recipes.backToList')}</Link>
        </Button>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-4xl text-foreground">{recipe.name}</h1>
          <Badge variant={makable ? 'default' : 'destructive'}>
            {makable ? t('recipes.makable') : t('recipes.insufficientStock')}
          </Badge>
        </div>
        {recipe.description && (
          <p className="mt-2 text-muted-foreground">{recipe.description}</p>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('recipes.ingredientsStockTitle')}</CardTitle>
          <CardDescription>{t('recipes.ingredientsStockDesc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('recipes.colIngredient')}</TableHead>
                  <TableHead>{t('recipes.colRequired')}</TableHead>
                  <TableHead>{t('recipes.colInStock')}</TableHead>
                  <TableHead className="text-right">
                    {t('recipes.colSheet')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ingredientWithInfo.map((ingredient) => {
                  return (
                    <TableRow key={ingredient.id}>
                      <TableCell className="font-medium">
                        {ingredient.name}
                      </TableCell>
                      <TableCell>{ingredient.ingredientAmount}</TableCell>
                      <TableCell>
                        <span
                          className={
                            ingredient.ok ? 'text-primary' : 'text-destructive'
                          }
                        >
                          {ingredient.stock}
                        </span>
                        {!ingredient.ok && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            {t('recipes.missingAmount', {
                              amount:
                                ingredient.ingredientAmount - ingredient.stock,
                            })}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild size="sm" variant="secondary">
                          <Link
                            to={ingredientDetailTo}
                            params={{ id: ingredient.id }}
                          >
                            {t('common.details')}
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <Separator />
          <p className="text-sm text-muted-foreground">
            {t('recipes.unitsNote')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
