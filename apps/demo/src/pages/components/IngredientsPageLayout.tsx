import { ListPaginationBar } from '@/components/ListPaginationBar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useIngredientsFilters } from '@/hooks/useIngredientsFilters';
import { formatDate, t } from '@/i18n';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import { categoryLabels } from '@/lib/categoryLabels';
import type { Ingredient, IngredientCategory } from '@/types/domain';
import { Link } from '@tanstack/react-router';
import { IngredientsTableSkeleton } from './IngredientsTableSkeleton';

const categories: (IngredientCategory | 'tous')[] = [
  'tous',
  'viande',
  'poisson',
  'cereales',
  'boisson',
  'herbe',
  'laitier',
  'autre',
];

type IngredientsPageLayoutProps = {
  ingredients: Ingredient[];
  totalItems: number;
  totalPages: number;
  isPending: boolean;
};

export function IngredientsPageLayout({
  ingredients,
  totalItems,
  totalPages,
  isPending,
}: IngredientsPageLayoutProps) {
  const {
    filters: { search, category, expiringSoon, inStockOnly, page, pageSize },
    setFilters,
  } = useIngredientsFilters();
  const prefix = useAppPathPrefix();
  const ingredientDetailTo = `${prefix}/ingredients/$id` as const;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-4xl text-foreground">
          {t('ingredients.title')}
        </h1>
        <p className="text-muted-foreground">{t('ingredients.subtitle')}</p>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border-2 border-border bg-card/80 p-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="ing-search">{t('common.search')}</Label>
            <Input
              id="ing-search"
              placeholder={t('ingredients.searchPlaceholder')}
              value={search}
              onChange={(e) => setFilters({ search: e.target.value })}
              aria-label={t('ingredients.searchAria')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ing-cat">{t('ingredients.category')}</Label>
            <Select
              value={category}
              onValueChange={(category) =>
                setFilters({
                  category: category as IngredientCategory | 'tous',
                })
              }
            >
              <SelectTrigger
                id="ing-cat"
                aria-label={t('ingredients.categoryFilterAria')}
              >
                <SelectValue placeholder={t('ingredients.category')} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === 'tous' ? t('categories.all') : categoryLabels[c]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={expiringSoon}
              onChange={(e) => setFilters({ expiringSoon: e.target.checked })}
              className="size-4 rounded border-2 border-foreground"
            />
            {t('ingredients.expiringSoon')}
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setFilters({ inStockOnly: e.target.checked })}
              className="size-4 rounded border-2 border-foreground"
            />
            {t('ingredients.inStockOnly')}
          </label>
        </div>
      </div>

      <div className="rounded-xl border-2 border-border">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('ingredients.colName')}</TableHead>
                <TableHead>{t('ingredients.colStock')}</TableHead>
                <TableHead>{t('ingredients.colExpiry')}</TableHead>
                <TableHead>{t('ingredients.colCategory')}</TableHead>
                <TableHead className="text-right">
                  {t('ingredients.colSheet')}
                </TableHead>
              </TableRow>
            </TableHeader>
            {isPending ? (
              <IngredientsTableSkeleton rows={pageSize} />
            ) : (
              <TableBody>
                {ingredients.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center text-muted-foreground"
                    >
                      {t('ingredients.empty')}
                    </TableCell>
                  </TableRow>
                ) : (
                  ingredients.map((ing) => (
                    <TableRow key={ing.id}>
                      <TableCell className="font-medium">{ing.name}</TableCell>
                      <TableCell>
                        {ing.quantity} {ing.unit}
                      </TableCell>
                      <TableCell>
                        <time dateTime={ing.dueDate}>
                          {formatDate(ing.dueDate)}
                        </time>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {categoryLabels[ing.category]}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild size="sm" variant="secondary">
                          <Link to={ingredientDetailTo} params={{ id: ing.id }}>
                            {t('common.details')}
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            )}
          </Table>
        </div>
        <ListPaginationBar
          className="px-4 pb-4"
          page={page}
          totalPages={totalPages}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={(page) => setFilters({ page })}
          isLoading={isPending}
        />
      </div>
    </div>
  );
}
