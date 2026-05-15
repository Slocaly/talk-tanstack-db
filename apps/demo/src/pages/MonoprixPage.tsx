import { useEffect } from 'react';
import { ListPaginationBar } from '@/components/ListPaginationBar';
import { MonoprixProductCard } from '@/components/monoprix/MonoprixProductCard';
import { MonoprixStoreLayout } from '@/components/monoprix/MonoprixStoreLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { useMonoprixFilters } from '@/hooks/useMonoprixFilters';
import type { Ingredient } from '@/types/domain';

export type MonoprixPageProps = {
  ingredients: Ingredient[];
  totalItems: number;
  totalPages: number;
  isPending: boolean;
  error: Error | null;
  refetch: () => void;
};

export function MonoprixPage({
  ingredients,
  totalItems,
  totalPages,
  isPending,
  error,
  refetch,
}: MonoprixPageProps) {
  const {
    filters: { search, page, pageSize },
    setFilters,
  } = useMonoprixFilters();

  useEffect(() => {
    document.title = 'Monoprix — Le village en promo';
  }, []);

  if (error) {
    return (
      <MonoprixStoreLayout>
        <div className="rounded-xl border-4 border-destructive bg-white p-6">
          <p className="font-semibold">Impossible de charger le rayon</p>
          <p className="text-sm text-muted-foreground">
            {error instanceof Error ? error.message : 'Erreur'}
          </p>
          <Button type="button" className="mt-4" onClick={refetch}>
            Réessayer
          </Button>
        </div>
      </MonoprixStoreLayout>
    );
  }

  return (
    <MonoprixStoreLayout>
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Tout pour cuisiner le sanglier — prix du jour, stock du village.
        </p>

        <div className="rounded-xl border-2 border-[var(--bd-ink)] bg-white/90 p-4">
          <Label htmlFor="monoprix-search">Rechercher un produit</Label>
          <Input
            id="monoprix-search"
            type="search"
            placeholder="Nom, catégorie…"
            value={search}
            className="mt-2"
            onChange={(e) => setFilters({ search: e.target.value, page: 1 })}
          />
        </div>

        <ul
          className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3"
          aria-busy={isPending || undefined}
        >
          {isPending
            ? Array.from({ length: 6 }, (_, i) => (
                <li key={`sk-${i}`}>
                  <Skeleton className="h-64 w-full" />
                </li>
              ))
            : ingredients.length === 0
              ? (
                <li className="col-span-full text-center text-muted-foreground">
                  Aucun produit dans ce rayon.
                </li>
                )
              : ingredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    <MonoprixProductCard ingredient={ingredient} />
                  </li>
                ))}
        </ul>

        <ListPaginationBar
          page={page}
          totalPages={totalPages}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={(p) => setFilters({ page: p })}
          isLoading={isPending}
        />
      </div>
    </MonoprixStoreLayout>
  );
}
