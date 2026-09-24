import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { categoryLabels } from '@/lib/categoryLabels';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { IngredientMap } from '@/components/map/IngredientMap';
import { AdjustStockCardMutationDBProvider } from '@/pages/providers/AdjustStockCardMutationDBProvider';
import { AdjustStockCardMutationProvider } from '@/pages/providers/AdjustStockCardMutationProvider';
import { MonoprixAd } from '@/components/monoprix/MonoprixAd';
import { formatDate, t } from '@/i18n';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import type { Ingredient } from '@/types/domain';

export interface IngredientDetailPageProps {
  id: string | undefined;
  ingredient: Ingredient | null;
  isPending: boolean;
  error: Error | null;
  refetch: () => void;
}

export function IngredientDetailPage({
  id,
  ingredient,
  isPending,
  error,
  refetch,
}: IngredientDetailPageProps) {
  const prefix = useAppPathPrefix();
  const ingredientsListTo = `${prefix}/ingredients` as const;
  const AdjustStock =
    prefix === '/tsdb'
      ? AdjustStockCardMutationDBProvider
      : AdjustStockCardMutationProvider;

  useEffect(() => {
    const name = ingredient?.name;
    if (name) {
      document.title = t('documentTitle.ingredient', { name });
    }
  }, [ingredient?.name]);

  if (!id) {
    return <p className="text-destructive">{t('common.missingId')}</p>;
  }

  if (isPending) {
    return (
      <div className="space-y-6" aria-busy="true">
        <div>
          <Button asChild variant="outline" size="sm" className="mb-3">
            <Link to={ingredientsListTo}>{t('ingredients.backToList')}</Link>
          </Button>
          <Skeleton className="h-10 w-2/3 max-w-md" />
          <Skeleton className="mt-2 h-6 w-24 rounded-full" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t('ingredients.infoTitle')}</CardTitle>
              <CardDescription>{t('ingredients.infoDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('ingredients.currentStock')}
                </p>
                <Skeleton className="mt-1 h-8 w-32" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('ingredients.dueDate')}
                </p>
                <Skeleton className="mt-1 h-5 w-48" />
              </div>
              <Separator />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {t('ingredients.whereToFind')}
                </p>
                <Skeleton className="mt-1 h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-4/5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {t('ingredients.howToHarvest')}
                </p>
                <Skeleton className="mt-1 h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-3/4" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('ingredients.adjustTitle')}</CardTitle>
              <CardDescription>{t('ingredients.adjustDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="qty-loading">
                  {t('ingredients.newQuantity')}
                </Label>
                <Skeleton id="qty-loading" className="h-9 w-full" />
              </div>
              <Skeleton className="h-9 w-44" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('ingredients.mapTitle')}</CardTitle>
            <CardDescription>{t('ingredients.mapDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full rounded-md" />
          </CardContent>
        </Card>
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
        <CardContent>
          <Button type="button" onClick={refetch}>
            {t('common.retry')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!ingredient) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('ingredients.notFoundTitle')}</CardTitle>
          <CardDescription>{t('ingredients.notFoundDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary">
            <Link to={ingredientsListTo}>{t('ingredients.returnToList')}</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const hasMapCoords =
    Number.isFinite(ingredient.lat) && Number.isFinite(ingredient.lng);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Button asChild variant="outline" size="sm" className="mb-3">
            <Link to={ingredientsListTo}>{t('ingredients.backToList')}</Link>
          </Button>
          <h1 className="text-4xl text-foreground">{ingredient.name}</h1>
          <Badge className="mt-2" variant="secondary">
            {categoryLabels[ingredient.category]}
          </Badge>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('ingredients.infoTitle')}</CardTitle>
            <CardDescription>{t('ingredients.infoDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                {t('ingredients.currentStock')}
              </p>
              <p className="font-[family-name:var(--font-display)] text-2xl text-primary">
                {ingredient.quantity} {ingredient.unit}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {t('ingredients.dueDate')}
              </p>
              <p>
                <time dateTime={ingredient.dueDate}>
                  {formatDate(ingredient.dueDate, { dateStyle: 'long' })}
                </time>
              </p>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t('ingredients.whereToFind')}
              </p>
              <p className="text-muted-foreground">{ingredient.whereToFind}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t('ingredients.howToHarvest')}
              </p>
              <p className="text-muted-foreground">{ingredient.howToHarvest}</p>
            </div>
          </CardContent>
        </Card>

        <AdjustStock
          key={ingredient.id}
          ingredientId={ingredient.id}
          quantity={ingredient.quantity}
        />
      </div>

      <MonoprixAd
        ingredientId={ingredient.id}
        ingredientName={ingredient.name}
      />

      <Card>
        <CardHeader>
          <CardTitle>{t('ingredients.mapTitle')}</CardTitle>
          <CardDescription>{t('ingredients.mapDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          {hasMapCoords ? (
            <IngredientMap
              lat={ingredient.lat}
              lng={ingredient.lng}
              title={ingredient.name}
              snippet={ingredient.whereToFind}
              category={ingredient.category}
            />
          ) : (
            <p className="text-muted-foreground">{t('ingredients.noCoords')}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
