import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { t } from '@/i18n';
import { getMonoprixReturnTo } from '@/lib/monoprixReturnTo';

type MonoprixStoreLayoutProps = {
  children: ReactNode;
  showBackToCatalog?: boolean;
};

export function MonoprixStoreLayout({
  children,
  showBackToCatalog = false,
}: MonoprixStoreLayoutProps) {
  const returnTo = getMonoprixReturnTo();

  return (
    <div className="monoprix-store flex min-h-svh flex-col">
      <header className="monoprix-banner border-b-4 border-[var(--bd-ink)] px-4 py-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="pl-10">
            <Link
              to="/tsq/monoprix"
              className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-white no-underline sm:text-5xl"
            >
              Monoprix
            </Link>
            <p className="mt-1 text-sm font-semibold text-white/90 sm:text-base">
              {t('monoprix.tagline')}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to={returnTo}
              className="bd-comic-pill inline-flex w-fit bg-white/90 px-4 py-2 text-sm font-bold text-[var(--monoprix-red)] no-underline"
            >
              {t('monoprix.backToVillage')}
            </Link>
            {showBackToCatalog ? (
              <Link
                to="/tsq/monoprix"
                className="bd-comic-pill inline-flex w-fit bg-white px-4 py-2 text-sm font-bold text-[var(--monoprix-red)] no-underline"
              >
                {t('monoprix.allAisles')}
              </Link>
            ) : null}
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-8">
        {children}
      </main>
      <footer className="border-t-4 border-[var(--bd-ink)] bg-white/80 px-4 py-4 text-center text-sm text-muted-foreground">
        {t('monoprix.footer')}
      </footer>
    </div>
  );
}
