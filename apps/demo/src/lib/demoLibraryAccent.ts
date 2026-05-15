import type { AppPathPrefix } from '@/lib/appPathPrefix';

/** TanStack Query / React Query emblem pink. */
export const TANSTACK_QUERY_ACCENT = '#FF4154';

/** TanStack DB stack accent (teal, distinct from Query pink). */
export const TANSTACK_DB_ACCENT = '#0d9488';

export function demoLibraryAccentHex(prefix: AppPathPrefix): string {
  return prefix === '/tsq' ? TANSTACK_QUERY_ACCENT : TANSTACK_DB_ACCENT;
}
