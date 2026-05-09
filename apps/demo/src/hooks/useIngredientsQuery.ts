import { useQuery } from '@tanstack/react-query'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { listIngredients } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { useIngredientsFilters } from './useIngredientsFilters'

export function useIngredientsQuery() {
  const prefix = useAppPathPrefix()
  const { filters } = useIngredientsFilters()

  return useQuery({
    queryKey: queryKeys.ingredientsCatalog(prefix, filters),
    queryFn: () => listIngredients(prefix, filters),
  })
}
