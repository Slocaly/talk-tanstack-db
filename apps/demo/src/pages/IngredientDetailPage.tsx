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
      document.title = `${name} — Ingrédient`;
    }
  }, [ingredient?.name]);

  if (!id) {
    return <p className="text-destructive">Identifiant manquant.</p>;
  }

  if (isPending) {
    return (
      <div className="space-y-6" aria-busy="true">
        <div>
          <Button asChild variant="outline" size="sm" className="mb-3">
            <Link to={ingredientsListTo}>← Ingrédients</Link>
          </Button>
          <Skeleton className="h-10 w-2/3 max-w-md" />
          <Skeleton className="mt-2 h-6 w-24 rounded-full" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Informations</CardTitle>
              <CardDescription>
                Quantité, péremption et conservation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Stock actuel</p>
                <Skeleton className="mt-1 h-8 w-32" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date limite</p>
                <Skeleton className="mt-1 h-5 w-48" />
              </div>
              <Separator />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Où trouver
                </p>
                <Skeleton className="mt-1 h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-4/5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Comment récolter
                </p>
                <Skeleton className="mt-1 h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-3/4" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ajuster le stock</CardTitle>
              <CardDescription>
                Enregistrée sur l’API — met à jour le tableau de bord et les
                recettes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="qty-loading">Nouvelle quantité</Label>
                <Skeleton id="qty-loading" className="h-9 w-full" />
              </div>
              <Skeleton className="h-9 w-44" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Carte du lieu</CardTitle>
            <CardDescription>
              Repère approximatif dans la forêt d’Armorique (OpenStreetMap).
            </CardDescription>
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
          <CardTitle>Erreur</CardTitle>
          <CardDescription>
            {error instanceof Error ? error.message : 'Chargement impossible'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" onClick={refetch}>
            Réessayer
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!ingredient) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Ingrédient introuvable</CardTitle>
          <CardDescription>
            Cette référence n’existe pas dans le stock.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary">
            <Link to={ingredientsListTo}>Retour à la liste</Link>
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
            <Link to={ingredientsListTo}>← Ingrédients</Link>
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
            <CardTitle>Informations</CardTitle>
            <CardDescription>
              Quantité, péremption et conservation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Stock actuel</p>
              <p className="font-[family-name:var(--font-display)] text-2xl text-primary">
                {ingredient.quantity} {ingredient.unit}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date limite</p>
              <p>
                <time dateTime={ingredient.dueDate}>
                  {new Date(ingredient.dueDate).toLocaleDateString('fr-FR', {
                    dateStyle: 'long',
                  })}
                </time>
              </p>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Où trouver
              </p>
              <p className="text-muted-foreground">{ingredient.whereToFind}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Comment récolter
              </p>
              <p className="text-muted-foreground">{ingredient.howToHarvest}</p>
            </div>
          </CardContent>
        </Card>

        <AdjustStock
          key={`${ingredient.id}-${ingredient.quantity}`}
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
          <CardTitle>Carte du lieu</CardTitle>
          <CardDescription>
            Repère approximatif dans la forêt d’Armorique (OpenStreetMap).
          </CardDescription>
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
            <p className="text-muted-foreground">
              Aucune coordonnée n’est renseignée pour cet ingrédient.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
