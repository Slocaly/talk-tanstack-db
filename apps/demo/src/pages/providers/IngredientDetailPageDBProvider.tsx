import { useParams } from '@tanstack/react-router';
import { IngredientDetailPage } from '@/pages/IngredientDetailPage';
import { eq, useLiveQuery } from '@tanstack/react-db';
import { ingredientCollection } from '@/collections/ingredient-collection';
import { t } from '@/i18n';

export function IngredientDetailPageDBProvider() {
  const { id } = useParams({ strict: false });

  const { data: ingredient, isLoading: isPending, isError } = useLiveQuery((q) =>
    q.from({ ingredients: ingredientCollection })
      .where(({ ingredients }) => eq(ingredients.id, id)).findOne(),
    [id],
  );

  return (
    <IngredientDetailPage
      id={id}
      ingredient={ingredient ?? null}
      isPending={isPending}
      error={isError ? new Error(t('ingredients.fetchError')) : null}
      refetch={() => { }}
    />
  );
}
