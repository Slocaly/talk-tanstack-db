/** API and query keys are scoped to the TanStack Query demo route tree (`/tsq/...`). */
export type AppPathPrefix = "/tsq" | "/tsdb";

export function useAppPathPrefix(): AppPathPrefix {
  return "/tsq";
}
