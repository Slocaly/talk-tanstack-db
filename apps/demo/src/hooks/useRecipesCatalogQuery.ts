import { useQuery } from '@tanstack/react-query'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { listRecipes } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { useRecipesFilters } from './useRecipesFilters'

export function useRecipesQuery(prefix: AppPathPrefix) {
  const { filters } = useRecipesFilters()

  return useQuery({
    queryKey: queryKeys.recipesCatalog(prefix, filters),
    queryFn: () => listRecipes(prefix, filters),
  })
}
