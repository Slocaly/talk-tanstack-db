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
      document.title = `${ingredient.name} — Monoprix`;
    }
  }, [ingredient?.name]);

  if (!id) {
    return (
      <MonoprixStoreLayout showBackToCatalog>
        <p className="text-destructive">Identifiant manquant.</p>
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
      </MonoprixStoreLayout>
    );
  }

  if (!ingredient) {
    return (
      <MonoprixStoreLayout showBackToCatalog>
        <Card>
          <CardHeader>
            <CardTitle>Produit introuvable</CardTitle>
            <CardDescription>Ce rayon est vide.</CardDescription>
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
            <Badge variant="secondary">{categoryLabels[ingredient.category]}</Badge>
            <CardTitle className="text-3xl">{ingredient.name}</CardTitle>
            <MonoprixPriceTag price={price} size="lg" />
            <p className="text-sm text-muted-foreground">
              {price.perUnit} · <span className="italic">négociable</span>
            </p>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fiche produit</CardTitle>
            <CardDescription>Informations rayon village</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Disponibilité</p>
              <p className="text-muted-foreground">
                {ingredient.quantity > 0
                  ? `${ingredient.quantity} ${ingredient.unit} en rayon`
                  : 'Rupture — revenez après la moisson'}
              </p>
            </div>
            <div>
              <p className="font-semibold">DLUO</p>
              <p className="text-muted-foreground">
                <time dateTime={ingredient.dueDate}>
                  {new Date(ingredient.dueDate).toLocaleDateString('fr-FR', {
                    dateStyle: 'long',
                  })}
                </time>
              </p>
            </div>
            <div>
              <p className="font-semibold">Remise au menhir</p>
              <p className="text-muted-foreground">{ingredient.whereToFind}</p>
            </div>
            <div>
              <p className="font-semibold">État</p>
              <p className="text-muted-foreground">Bon — emballage gaulois d&apos;origine</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MonoprixStoreLayout>
  );
}
