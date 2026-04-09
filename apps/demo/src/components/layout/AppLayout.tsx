import { Link, Outlet } from '@tanstack/react-router'
import { useAppPathPrefix, useToggleAppPathPrefixOnDollar } from '@/lib/appPathPrefix'

export function AppLayout() {
  useToggleAppPathPrefixOnDollar()
  const prefix = useAppPathPrefix()
  const nav =
    prefix === '/tsdb'
      ? ([
          { to: '/tsdb' as const, label: 'Village' },
          { to: '/tsdb/ingredients' as const, label: 'Ingrédients' },
          { to: '/tsdb/recipes' as const, label: 'Recettes' },
        ] as const)
      : ([
          { to: '/tsq' as const, label: 'Village' },
          { to: '/tsq/ingredients' as const, label: 'Ingrédients' },
          { to: '/tsq/recipes' as const, label: 'Recettes' },
        ] as const)

  return (
    <div className="app-frame flex min-h-svh flex-col">
      <header className="bd-comic-header border-b-2 border-foreground bg-secondary/25 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to={prefix === '/tsdb' ? '/tsdb' : '/tsq'}
            className="bd-comic-wordmark font-[family-name:var(--font-display)] text-2xl tracking-wide text-foreground no-underline sm:text-3xl"
          >
            Stock du village gaulois
          </Link>
          <nav
            className="flex flex-wrap justify-center gap-2 sm:justify-end"
            aria-label="Navigation principale"
          >
            {nav.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="bd-comic-pill bg-card px-3 py-1.5 text-sm font-semibold text-foreground no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="w-full flex-1 px-4 py-8 text-left sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <footer className="bd-comic-footer mt-auto px-4 py-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        Par Toutatis ! — suivez les dates de péremption et respectez le druide.
      </footer>
    </div>
  )
}
