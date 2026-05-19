import { Link, Outlet, useRouterState } from '@tanstack/react-router';
import { useDemoStackToggleHotkey } from '@/hooks/useDemoStackToggleHotkey';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import { demoLibraryAccentHex } from '@/lib/demoLibraryAccent';
import { cn } from '@/lib/utils';

function isMonoprixPath(pathname: string): boolean {
  return pathname.startsWith('/tsq/monoprix');
}

export function AppLayout() {
  useDemoStackToggleHotkey();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prefix = useAppPathPrefix();
  const accent = demoLibraryAccentHex(prefix);
  const villageTo = prefix === '/tsq' ? '/tsq' : '/tsdb';
  const nav = [
    { to: villageTo, label: 'Village' },
    { to: `${prefix}/ingredients`, label: 'Ingrédients' },
    { to: `${prefix}/recipes`, label: 'Recettes' },
  ];

  if (isMonoprixPath(pathname)) {
    return <Outlet />;
  }

  return (
    <div className="app-frame flex min-h-svh flex-col">
      <header
        className={cn(
          'bd-comic-header relative border-b-2 border-foreground border-t-[6px] px-4 py-3 sm:px-6 lg:px-8',
        )}
        style={{
          borderTopColor: accent,
          backgroundColor: `color-mix(in srgb, ${accent} 12%, var(--background))`,
        }}
      >
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to={villageTo}
            className="bd-comic-wordmark pl-10 font-[family-name:var(--font-display)] text-2xl tracking-wide text-foreground no-underline sm:text-3xl"
          >
            Stock du village gaulois
          </Link>
          <nav
            className="flex flex-wrap justify-center gap-2 sm:justify-end"
            aria-label="Navigation principale"
          >
            {nav.map(({ to, label }) => (
              <Link
                key={label}
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
  );
}
