import { useAtom } from 'jotai';
import {
  monoprixPageAtom,
  monoprixPageSizeAtom,
  monoprixSearchAtom,
} from '@/atoms/monoprixPageAtoms';

export type MonoprixFilters = {
  search: string;
  page: number;
  pageSize: number;
};

export function useMonoprixFilters() {
  const [search, setSearch] = useAtom(monoprixSearchAtom);
  const [page, setPage] = useAtom(monoprixPageAtom);
  const [pageSize, setPageSize] = useAtom(monoprixPageSizeAtom);

  const filters = { search, page, pageSize };

  const setFilters = (updated: Partial<MonoprixFilters>) => {
    if (updated.search !== undefined) setSearch(updated.search);
    if (updated.page !== undefined) setPage(updated.page);
    if (updated.pageSize !== undefined) setPageSize(updated.pageSize);
  };

  return { filters, setFilters };
}
