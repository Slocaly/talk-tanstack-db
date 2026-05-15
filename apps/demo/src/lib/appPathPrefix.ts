import { useRouterState } from '@tanstack/react-router';

/** Route segment used for API paths and in-app links (`/tsq/...` vs `/tsdb/...`). */
export type AppPathPrefix = '/tsq' | '/tsdb';

export function useAppPathPrefix(): AppPathPrefix {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pathname.startsWith('/tsdb') ? '/tsdb' : '/tsq';
}
