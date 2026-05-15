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
    document.title = 'Village — Stock du village gaulois';
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
          <CardTitle>Impossible de charger le village</CardTitle>
          <CardDescription>
            {error instanceof Error ? error.message : 'Erreur inconnue'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" onClick={() => void refetch()}>
            Réessayer
          </Button>
        </CardContent>
      </Card>
    );
  }

  const next = data.nextExpiring;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-4xl text-foreground">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Vue d’ensemble des réserves avant le prochain banquet — ou la
          prochaine patrouille romaine.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 space-y-0">
            <Package className="size-8 text-primary" aria-hidden />
            <div>
              <CardTitle>Références en stock</CardTitle>
              <CardDescription>
                Types d’ingrédients avec quantité {'>'} 0
              </CardDescription>
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
              <CardTitle>Unités au total</CardTitle>
              <CardDescription>
                Somme des quantités (toutes unités confondues)
              </CardDescription>
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
              <CardTitle>Prochaine péremption</CardTitle>
              <CardDescription>
                Article le plus urgent encore en stock
              </CardDescription>
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
                  Date limite :{' '}
                  <time dateTime={next.dueDate}>
                    {new Date(next.dueDate).toLocaleDateString('fr-FR', {
                      dateStyle: 'long',
                    })}
                  </time>
                </p>
                <Badge variant="secondary">
                  {categoryLabels[next.category]}
                </Badge>
              </>
            ) : (
              <p className="text-muted-foreground">Aucun stock disponible.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 space-y-0">
            <TriangleAlert className="size-8 text-destructive" aria-hidden />
            <div>
              <CardTitle>Alertes</CardTitle>
              <CardDescription>
                Péremption sous 7 jours et petits stocks
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-destructive">
                {data.expiringWithin7Days}
              </span>{' '}
              référence(s) à consommer dans les 7 jours.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                {data.lowStockCount}
              </span>{' '}
              référence(s) avec stock très bas (≤ 2).
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link to={ingredientsIndexTo}>Voir tous les ingrédients</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to={recipesIndexTo}>Consulter les recettes</Link>
        </Button>
      </div>
    </div>
  );
}
