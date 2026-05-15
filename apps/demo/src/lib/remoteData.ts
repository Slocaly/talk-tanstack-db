/** Subset used by list/detail pages (TanStack Query). */
export type AsyncListResult<T> = {
  data: T[] | undefined;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<unknown>;
};

export type AsyncSingleResult<T> = {
  data: T | null | undefined;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<unknown>;
};
