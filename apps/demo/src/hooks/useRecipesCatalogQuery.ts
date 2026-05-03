import { useQuery } from "@tanstack/react-query";
import { listRecipes } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";
import { useRecipesFilters } from "./useRecipesFilters";

export function useRecipesQuery() {
  const { filters } = useRecipesFilters();  

  return useQuery({
    queryKey: queryKeys.recipesCatalog("/tsq", filters),
    queryFn: () => listRecipes("/tsq", filters),
  });
}
