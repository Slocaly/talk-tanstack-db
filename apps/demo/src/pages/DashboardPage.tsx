import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import type { UseQueryResult } from '@tanstack/react-query';
import { CalendarClock, ChefHat, Package, TriangleAlert } from 'lucide-react';
import type { DashboardSummary } from '@/types/domain';
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
import { formatDate, t } from '@/i18n';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import { categoryLabels } from '@/lib/categoryLabels';

export type DashboardPageProps = {
  dashboardQuery: UseQueryResult<DashboardSummary, Error>;
};

export function DashboardPage({ dashboardQuery }: DashboardPageProps) {
  const { data, isPending, isError, error, refetch } = dashboardQuery;
  const prefix = useAppPathPrefix();
  const ingredientDetailTo = `${prefix}/ingredients/$id` as const;
  const ingredientsIndexTo = `${prefix}/ingredients` as const;
  const recipesIndexTo = `${prefix}/recipes` as const;

  useEffect(() => {
    document.title = t('documentTitle.village');
  }, []);

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-2/3 max-w-md" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.loadErrorTitle')}</CardTitle>
          <CardDescription>
            {error instanceof Error ? error.message : t('common.unknownError')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" onClick={() => void refetch()}>
            {t('common.retry')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  const next = data.nextExpiring;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-4xl text-foreground">{t('dashboard.title')}</h1>
        <p className="text-muted-foreground">{t('dashboard.subtitle')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 space-y-0">
            <Package className="size-8 text-primary" aria-hidden />
            <div>
              <CardTitle>{t('dashboard.stockRefsTitle')}</CardTitle>
              <CardDescription>{t('dashboard.stockRefsDesc')}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-[family-name:var(--font-display)] text-4xl text-primary">
              {data.totalIngredientKinds}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 space-y-0">
            <ChefHat className="size-8 text-secondary" aria-hidden />
            <div>
              <CardTitle>{t('dashboard.totalUnitsTitle')}</CardTitle>
              <CardDescription>{t('dashboard.totalUnitsDesc')}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-[family-name:var(--font-display)] text-4xl text-secondary">
              {data.totalStockUnits}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 space-y-0">
            <CalendarClock
              className="size-8 text-accent-foreground"
              aria-hidden
            />
            <div>
              <CardTitle>{t('dashboard.nextExpiryTitle')}</CardTitle>
              <CardDescription>{t('dashboard.nextExpiryDesc')}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {next ? (
              <>
                <Link
                  to={ingredientDetailTo}
                  params={{ id: next.id }}
                  className="font-[family-name:var(--font-display)] text-xl text-primary underline-offset-2 hover:underline"
                >
                  {next.name}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {t('dashboard.dueDate')}{' '}
                  <time dateTime={next.dueDate}>
                    {formatDate(next.dueDate, { dateStyle: 'long' })}
                  </time>
                </p>
                <Badge variant="secondary">
                  {categoryLabels[next.category]}
                </Badge>
              </>
            ) : (
              <p className="text-muted-foreground">{t('dashboard.noStock')}</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 space-y-0">
            <TriangleAlert className="size-8 text-destructive" aria-hidden />
            <div>
              <CardTitle>{t('dashboard.alertsTitle')}</CardTitle>
              <CardDescription>{t('dashboard.alertsDesc')}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-destructive">
                {data.expiringWithin7Days}
              </span>{' '}
              {t('dashboard.expiringRefs')}
            </p>
            <p>
              <span className="font-semibold text-foreground">
                {data.lowStockCount}
              </span>{' '}
              {t('dashboard.lowStockRefs')}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link to={ingredientsIndexTo}>{t('dashboard.viewIngredients')}</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to={recipesIndexTo}>{t('dashboard.viewRecipes')}</Link>
        </Button>
      </div>
    </div>
  );
}
