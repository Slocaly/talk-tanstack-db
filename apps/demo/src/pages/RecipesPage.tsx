import { useEffect, useState } from 'react';
import { ListPaginationBar } from '@/components/ListPaginationBar';
import { AddRecipeModal } from '@/components/recipes/AddRecipeModal';
import { Link } from '@tanstack/react-router';
import { PlusIcon } from 'lucide-react';
import type { CreateRecipeInput } from '@/lib/api';
import type { Ingredient, Recipe } from '@/types/domain';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { t } from '@/i18n';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import { useRecipesFilters } from '@/hooks/useRecipesFilters';

export interface RecipesPageProps {
  recipes: Recipe[];
  isPending: boolean;
  error: Error | null;
  refetch: () => void;
  totalItems: number;
  totalPages: number;
  ingredientsForAdd?: Ingredient[];
  onAddRecipe?: (input: CreateRecipeInput) => Promise<void>;
  isAddingRecipe?: boolean;
  addRecipeError?: Error | null;
}

export function RecipesPage({
  recipes,
  isPending,
  error,
  refetch,
  totalItems,
  totalPages,
  ingredientsForAdd,
  onAddRecipe,
  isAddingRecipe = false,
  addRecipeError = null,
}: RecipesPageProps) {
  const prefix = useAppPathPrefix();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const {
    filters: { search, makableOnly, page, pageSize },
    setFilters,
  } = useRecipesFilters();
  const canAddRecipe =
    onAddRecipe !== undefined && ingredientsForAdd !== undefined;

  useEffect(() => {
    document.title = t('documentTitle.recipes');
  }, []);

  if (error) {
    return (
      <div className="rounded-xl border-2 border-destructive p-6">
        <p className="font-semibold">{t('recipes.loadError')}</p>
        <p className="text-sm text-muted-foreground">
          {error instanceof Error ? error.message : t('common.error')}
        </p>
        <div className="mt-4 flex gap-2">
          <Button type="button" onClick={refetch}>
            {t('common.retry')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="mb-2 text-4xl text-foreground">{t('recipes.title')}</h1>
          <p className="text-muted-foreground">{t('recipes.subtitle')}</p>
        </div>
        {canAddRecipe && (
          <Button type="button" onClick={() => setAddModalOpen(true)}>
            <PlusIcon />
            {t('recipes.addRecipe')}
          </Button>
        )}
      </div>

      {canAddRecipe && onAddRecipe && ingredientsForAdd && (
        <AddRecipeModal
          open={addModalOpen}
          onOpenChange={setAddModalOpen}
          ingredients={ingredientsForAdd}
          onSubmit={onAddRecipe}
          isPending={isAddingRecipe}
          error={addRecipeError}
        />
      )}

      <div className="flex flex-col gap-4 rounded-xl border-2 border-border bg-card/80 p-4">
        <div className="space-y-2">
          <Label htmlFor="recipe-search">{t('common.search')}</Label>
          <Input
            id="recipe-search"
            type="search"
            placeholder={t('recipes.searchPlaceholder')}
            value={search}
            onChange={(e) => setFilters({ search: e.target.value })}
            aria-label={t('recipes.searchAria')}
          />
        </div>
        <Label className="flex cursor-pointer items-center gap-2 text-sm font-normal">
          <input
            type="checkbox"
            checked={makableOnly}
            onChange={(e) => setFilters({ makableOnly: e.target.checked })}
            className="size-4 rounded border-2 border-foreground"
            aria-label={t('recipes.makableFilterAria')}
          />
          {t('recipes.makableFilter')}
        </Label>
      </div>

      <ul
        className="grid list-none gap-4 p-0 sm:grid-cols-2"
        aria-busy={isPending || undefined}
      >
        {isPending ? (
          Array.from({ length: 4 }, (_, i) => (
            <li key={`skeleton-${i}`}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <Skeleton className="h-7 w-2/3 max-w-xs" />
                    <Skeleton className="h-5 w-20 shrink-0 rounded-full" />
                  </div>
                  <div className="space-y-2 pt-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-9 w-36" />
                </CardContent>
              </Card>
            </li>
          ))
        ) : recipes.length === 0 ? (
          <li className="col-span-full text-center text-muted-foreground">
            {t('recipes.empty')}
          </li>
        ) : (
          recipes.map((recipe) => {
            return (
              <li key={recipe.id}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <CardTitle className="text-xl">{recipe.name}</CardTitle>
                      <Badge variant="default">{t('recipes.makableBadge')}</Badge>
                    </div>
                    {recipe.description && (
                      <CardDescription>{recipe.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button asChild size="sm">
                      <Link
                        to={`${prefix}/recipes/$id`}
                        params={{ id: recipe.id }}
                      >
                        {t('recipes.viewRecipe')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </li>
            );
          })
        )}
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
  );
}
