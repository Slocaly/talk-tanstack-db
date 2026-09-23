import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { t } from '@/i18n';
import { setMonoprixReturnTo } from '@/lib/monoprixReturnTo';
import { cn } from '@/lib/utils';

type MonoprixAdProps = {
  ingredientId: string;
  ingredientName: string;
};

/** Chance of showing the ad on each product page load (0–1). */
const MONOPRIX_AD_SHOW_PROBABILITY = 1;

export function MonoprixAd({ ingredientId, ingredientName }: MonoprixAdProps) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(Math.random() < MONOPRIX_AD_SHOW_PROBABILITY);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  if (show !== true) {
    return null;
  }

  return (
    <Link
      to="/tsq/monoprix/$id"
      params={{ id: ingredientId }}
      onClick={() => setMonoprixReturnTo(pathname)}
      className={cn(
        'monoprix-ad block rounded-xl border-4 border-[var(--bd-ink)] no-underline outline-offset-4',
        'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--monoprix-red)]',
      )}
      aria-label={t('monoprix.adAria', { name: ingredientName })}
    >
      <span className="monoprix-ad-flash" aria-hidden>
        {t('monoprix.adFlash')}
      </span>
      <p className="monoprix-ad-title">{t('monoprix.adTitle')}</p>
      <p className="monoprix-ad-body">
        <strong>{ingredientName}</strong> {t('monoprix.adBodySuffix')}
      </p>
      <p className="monoprix-ad-hint">{t('monoprix.adHint')}</p>
    </Link>
  );
}
