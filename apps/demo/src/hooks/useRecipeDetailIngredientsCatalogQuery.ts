import { useQuery } from '@tanstack/react-query'
import type { IngredientsFilters } from '@/hooks/useIngredientsFilters'
import { listIngredients } from '@/lib/api'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { LIST_FETCH_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'
import type { Ingredient } from '@/types/domain'

const recipeDetailCatalogFilters: IngredientsFilters = {
  search: '',
  category: 'tous',
  expiringSoon: false,
  inStockOnly: false,
  page: 1,
  pageSize: LIST_FETCH_PAGE_SIZE,
}

export function useRecipeDetailIngredientsCatalogQuery(prefix: AppPathPrefix) {
  return useQuery({
    queryKey: queryKeys.ingredients(prefix, LIST_FETCH_PAGE_SIZE),
    queryFn: async (): Promise<Ingredient[]> => {
      const res = await listIngredients(prefix, recipeDetailCatalogFilters)
      return res.items
    },
  })
}
