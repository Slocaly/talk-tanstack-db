import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { IngredientsPageLayout } from './components/IngredientsPageLayout';
import type { Ingredient } from '@/types/domain';

export interface IngredientsPageProps {
  ingredients: Ingredient[];
  totalItems: number;
  totalPages: number;
  refetch: () => void;
  error: Error | null;
  isPending: boolean;
}

export function IngredientsPage({
  ingredients,
  totalItems,
  totalPages,
  isPending,
  refetch,
  error,
}: IngredientsPageProps) {
  useEffect(() => {
    document.title = 'Ingrédients — Stock du village gaulois';
  }, []);

  if (error) {
    return (
      <div className="rounded-xl border-2 border-destructive bg-card p-6">
        <p className="font-semibold text-destructive">Échec du chargement</p>
        <p className="text-sm text-muted-foreground">
          {error instanceof Error ? error.message : 'Erreur inconnue'}
        </p>
        <Button className="mt-4" type="button" onClick={() => void refetch()}>
          Réessayer
        </Button>
      </div>
    );
  }

  if (!ingredients) {
    return null;
  }

  return (
    <IngredientsPageLayout
      ingredients={ingredients}
      totalItems={totalItems}
      totalPages={totalPages}
      isPending={isPending}
    />
  );
}
