import { useAtom } from "jotai";
import {
  ingredientsPageCategoryAtom,
  ingredientsPageExpiringSoonAtom,
  ingredientsPageInStockOnlyAtom,
  ingredientsPagePageSizeAtom,
  ingredientsPageSearchAtom,
  ingredientsPageTablePageAtom,
} from "@/atoms/ingredientsPageAtoms";
import type { IngredientCategory } from "@/types/domain";

export type IngredientsFilters = {
  search: string;
  category: IngredientCategory | "tous";
  expiringSoon: boolean;
  inStockOnly: boolean;
  page: number;
  pageSize: number;
};

export function useIngredientsFilters() {
  const [search, setSearch] = useAtom(ingredientsPageSearchAtom);
  const [category, setCategory] = useAtom(ingredientsPageCategoryAtom);
  const [expiringSoon, setExpiringSoon] = useAtom(
    ingredientsPageExpiringSoonAtom,
  );
  const [inStockOnly, setInStockOnly] = useAtom(ingredientsPageInStockOnlyAtom);
  const [page, setPage] = useAtom(ingredientsPageTablePageAtom);
  const [pageSize, setPageSize] = useAtom(ingredientsPagePageSizeAtom);

  const filters = {
    search,
    category,
    expiringSoon,
    inStockOnly,
    page,
    pageSize,
  };

  const setFilters = (updatedFilters: Partial<IngredientsFilters>) => {
    setSearch(updatedFilters.search ?? search);
    setCategory(updatedFilters.category ?? category);
    setExpiringSoon(updatedFilters.expiringSoon ?? expiringSoon);
    setInStockOnly(updatedFilters.inStockOnly ?? inStockOnly);
    setPage(updatedFilters.page ?? page);
    setPageSize(updatedFilters.pageSize ?? pageSize);
  };

  return {
    filters,
    setFilters,
  };
}
