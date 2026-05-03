import { useQuery } from "@tanstack/react-query";
import { listIngredients } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";
import { useIngredientsFilters } from "./useIngredientsFilters";

export function useIngredientsQuery() {
  const { filters } = useIngredientsFilters();

  return useQuery({
    queryKey: queryKeys.ingredientsCatalog("/tsq", filters),
    queryFn: () => listIngredients("/tsq", filters),
  });
}
