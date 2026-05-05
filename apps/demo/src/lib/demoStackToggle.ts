/**
 * Maps the current URL to the equivalent route on the other demo stack
 * (TanStack Query `/tsq/...` ↔ TanStack DB `/tsdb/...`).
 */
export type OppositeDemoNavigate =
  | { to: '/tsq'; params?: undefined }
  | { to: '/tsq/recipes'; params?: undefined }
  | { to: '/tsq/ingredients'; params?: undefined }
  | { to: '/tsq/recipes/$id'; params: { id: string } }
  | { to: '/tsq/ingredients/$id'; params: { id: string } }
  | { to: '/tsdb'; params?: undefined }
  | { to: '/tsdb/recipes'; params?: undefined }
  | { to: '/tsdb/ingredients'; params?: undefined }
  | { to: '/tsdb/recipes/$id'; params: { id: string } }
  | { to: '/tsdb/ingredients/$id'; params: { id: string } }

function stripTrailingSlashes(path: string): string {
  const t = path.replace(/\/+$/, '')
  return t === '' ? '/' : t
}

export function getOppositeDemoStackNavigate(
  pathname: string,
): OppositeDemoNavigate | null {
  const p = stripTrailingSlashes(pathname)

  if (p === '/' || p === '') {
    return { to: '/tsdb' }
  }

  if (p === '/tsq') {
    return { to: '/tsdb' }
  }

  if (p === '/tsq/recipes') {
    return { to: '/tsdb/recipes' }
  }

  const tsqRec = /^\/tsq\/recipes\/([^/]+)$/.exec(p)
  if (tsqRec) {
    return { to: '/tsdb/recipes/$id', params: { id: tsqRec[1] } }
  }

  if (p === '/tsq/ingredients') {
    return { to: '/tsdb/ingredients' }
  }

  const tsqIng = /^\/tsq\/ingredients\/([^/]+)$/.exec(p)
  if (tsqIng) {
    return { to: '/tsdb/ingredients/$id', params: { id: tsqIng[1] } }
  }

  if (p === '/tsdb') {
    return { to: '/tsq' }
  }

  if (p === '/tsdb/recipes') {
    return { to: '/tsq/recipes' }
  }

  if (p === '/tsdb/ingredients') {
    return { to: '/tsq/ingredients' }
  }

  const tsdbRec = /^\/tsdb\/recipes\/([^/]+)$/.exec(p)
  if (tsdbRec) {
    return { to: '/tsq/recipes/$id', params: { id: tsdbRec[1] } }
  }

  const tsdbIng = /^\/tsdb\/ingredients\/([^/]+)$/.exec(p)
  if (tsdbIng) {
    return { to: '/tsq/ingredients/$id', params: { id: tsdbIng[1] } }
  }

  return null
}
