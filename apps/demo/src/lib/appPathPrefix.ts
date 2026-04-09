import { useEffect } from 'react'
import { useNavigate, useRouterState } from '@tanstack/react-router'

export type AppPathPrefix = '/tsq' | '/tsdb'

export function useAppPathPrefix(): AppPathPrefix {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  if (pathname === '/tsdb' || pathname.startsWith('/tsdb/')) return '/tsdb'
  return '/tsq'
}

/** Same URL with the other stack prefix (`/tsq` ↔ `/tsdb`), or `null` if not under either tree. */
export function getToggledPrefixPath(pathname: string): string | null {
  if (pathname === '/tsq' || pathname === '/tsq/') return '/tsdb'
  if (pathname === '/tsdb' || pathname === '/tsdb/') return '/tsq'
  if (pathname.startsWith('/tsq/')) return `/tsdb${pathname.slice(4)}`
  if (pathname.startsWith('/tsdb/')) return `/tsq${pathname.slice(5)}`
  return null
}

function isTypingInField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
}

/** Press `$` (dollar) to swap between `/tsq/...` and `/tsdb/...` while keeping the rest of the path. */
export function useToggleAppPathPrefixOnDollar() {
  const navigate = useNavigate()
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== '$' || e.repeat) return
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (isTypingInField(e.target)) return
      const next = getToggledPrefixPath(pathname)
      if (!next) return
      e.preventDefault()
      void navigate({ to: next as '/tsq' })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [navigate, pathname])
}
