import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

type MonoprixStoreLayoutProps = {
  children: ReactNode;
  showBackToCatalog?: boolean;
};

export function MonoprixStoreLayout({
  children,
  showBackToCatalog = false,
}: MonoprixStoreLayoutProps) {
  return (
    <div className="monoprix-store flex min-h-svh flex-col">
      <header className="monoprix-banner border-b-4 border-[var(--bd-ink)] px-4 py-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              to="/tsq/monoprix"
              className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-white no-underline sm:text-5xl"
            >
              Monoprix
            </Link>
            <p className="mt-1 text-sm font-semibold text-white/90 sm:text-base">
              Le village en promo
            </p>
          </div>
          {showBackToCatalog ? (
            <Link
              to="/tsq/monoprix"
              className="bd-comic-pill inline-flex w-fit bg-white px-4 py-2 text-sm font-bold text-[var(--monoprix-red)] no-underline"
            >
              ← Tous les rayons
            </Link>
          ) : null}
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-8">
        {children}
      </main>
      <footer className="border-t-4 border-[var(--bd-ink)] bg-white/80 px-4 py-4 text-center text-sm text-muted-foreground">
        Prix affichés à titre gaulois — Par Toutatis, vérifiez la date limite.
      </footer>
    </div>
  );
}
