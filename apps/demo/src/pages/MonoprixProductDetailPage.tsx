import { useEffect } from 'react';
import { MonoprixStoreLayout } from '@/components/monoprix/MonoprixStoreLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { categoryLabels } from '@/lib/categoryLabels';
import { MonoprixPriceTag } from '@/components/monoprix/MonoprixPriceTag';
import { getMonoprixPrice } from '@/lib/monoprixPrice';
import { formatDate, t } from '@/i18n';
import type { Ingredient } from '@/types/domain';

export type MonoprixProductDetailPageProps = {
  id: string | undefined;
  ingredient: Ingredient | null;
  isPending: boolean;
  error: Error | null;
  refetch: () => void;
};

export function MonoprixProductDetailPage({
  id,
  ingredient,
  isPending,
  error,
  refetch,
}: MonoprixProductDetailPageProps) {
  useEffect(() => {
    if (ingredient?.name) {
      document.title = t('documentTitle.monoprixProduct', {
        name: ingredient.name,
      });
    }
  }, [ingredient?.name]);

  if (!id) {
    return (
      <MonoprixStoreLayout showBackToCatalog>
        <p className="text-destructive">{t('common.missingId')}</p>
      </MonoprixStoreLayout>
    );
  }

  if (isPending) {
    return (
      <MonoprixStoreLayout showBackToCatalog>
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="mt-4 h-48 w-full" />
      </MonoprixStoreLayout>
    );
  }

  if (error) {
    return (
      <MonoprixStoreLayout showBackToCatalog>
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
      </MonoprixStoreLayout>
    );
  }

  if (!ingredient) {
    return (
      <MonoprixStoreLayout showBackToCatalog>
        <Card>
          <CardHeader>
            <CardTitle>{t('monoprix.productNotFound')}</CardTitle>
            <CardDescription>{t('monoprix.emptyAisle')}</CardDescription>
          </CardHeader>
        </Card>
      </MonoprixStoreLayout>
    );
  }

  const price = getMonoprixPrice(ingredient);

  return (
    <MonoprixStoreLayout showBackToCatalog>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="monoprix-product-card">
          <CardHeader>
            <Badge variant="secondary">
              {categoryLabels[ingredient.category]}
            </Badge>
            <CardTitle className="text-3xl">{ingredient.name}</CardTitle>
            <MonoprixPriceTag price={price} size="lg" />
            <p className="text-sm text-muted-foreground">
              {price.perUnit} ·{' '}
              <span className="italic">{t('monoprix.negotiable')}</span>
            </p>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('monoprix.productSheet')}</CardTitle>
            <CardDescription>{t('monoprix.productSheetDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">{t('monoprix.availability')}</p>
              <p className="text-muted-foreground">
                {ingredient.quantity > 0
                  ? t('monoprix.inAisle', {
                      qty: ingredient.quantity,
                      unit: ingredient.unit,
                    })
                  : t('monoprix.outOfStock')}
              </p>
            </div>
            <div>
              <p className="font-semibold">{t('monoprix.dluo')}</p>
              <p className="text-muted-foreground">
                <time dateTime={ingredient.dueDate}>
                  {formatDate(ingredient.dueDate, { dateStyle: 'long' })}
                </time>
              </p>
            </div>
            <div>
              <p className="font-semibold">{t('monoprix.pickup')}</p>
              <p className="text-muted-foreground">{ingredient.whereToFind}</p>
            </div>
            <div>
              <p className="font-semibold">{t('monoprix.condition')}</p>
              <p className="text-muted-foreground">
                {t('monoprix.conditionValue')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MonoprixStoreLayout>
  );
}
