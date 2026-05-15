import { useAtom } from 'jotai';
import {
  recipesPageMakableOnlyAtom,
  recipesPagePageSizeAtom,
  recipesPageSearchAtom,
  recipesPageTablePageAtom,
} from '@/atoms/recipesPageAtoms';

export type RecipesFilters = {
  search: string;
  makableOnly: boolean;
  page: number;
  pageSize: number;
};

export function useRecipesFilters() {
  const [search, setSearch] = useAtom(recipesPageSearchAtom);
  const [makableOnly, setMakableOnly] = useAtom(recipesPageMakableOnlyAtom);
  const [page, setPage] = useAtom(recipesPageTablePageAtom);
  const [pageSize, setPageSize] = useAtom(recipesPagePageSizeAtom);

  const filters: RecipesFilters = {
    search,
    makableOnly,
    page,
    pageSize,
  };

  const setFilters = (updatedFilters: Partial<RecipesFilters>) => {
    setSearch(updatedFilters.search ?? search);
    setMakableOnly(updatedFilters.makableOnly ?? makableOnly);
    setPage(updatedFilters.page ?? page);
    setPageSize(updatedFilters.pageSize ?? pageSize);
  };

  return {
    filters,
    setFilters,
  };
}
