import { useRecipesQuery } from '@/hooks/useRecipesCatalogQuery'
import { RecipesPage } from '@/pages/RecipesPage'

export function RecipesPageDBProvider() {
  const { data, isPending, error, refetch } = useRecipesQuery('/tsdb')

  return (
    <RecipesPage
      recipes={data?.items ?? []}
      isPending={isPending}
      error={error}
      refetch={refetch}
      totalItems={data?.totalItems ?? 0}
      totalPages={data?.totalPages ?? 0}
    />
  )
}
