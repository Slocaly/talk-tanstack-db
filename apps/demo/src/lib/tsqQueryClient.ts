import { QueryClient } from '@tanstack/react-query';

/** QueryClient for the TanStack Query stack (`/tsq/...`). */
export const tsqQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
    },
  },
});
