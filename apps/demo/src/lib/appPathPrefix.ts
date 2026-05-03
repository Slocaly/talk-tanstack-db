/** API and query keys are scoped to the TanStack Query demo route tree (`/tsq/...`). */
export type AppPathPrefix = '/tsq'

export function useAppPathPrefix(): AppPathPrefix {
  return '/tsq'
}
