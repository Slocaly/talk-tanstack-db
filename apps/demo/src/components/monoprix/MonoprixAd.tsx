import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type MonoprixAdProps = {
  ingredientId: string;
  ingredientName: string;
};

/** Chance d’afficher la pub à chaque chargement de la fiche (0–1). */
const MONOPRIX_AD_SHOW_PROBABILITY = 0.45;

export function MonoprixAd({ ingredientId, ingredientName }: MonoprixAdProps) {
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
      className={cn(
        'monoprix-ad block rounded-xl border-4 border-[var(--bd-ink)] no-underline outline-offset-4',
        'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--monoprix-red)]',
      )}
      aria-label={`Publicité Monoprix : ${ingredientName}. Ouvrir la fiche au magasin.`}
    >
      <span className="monoprix-ad-flash" aria-hidden>
        Prix choc !
      </span>
      <p className="monoprix-ad-title">En rayon chez Monoprix !</p>
      <p className="monoprix-ad-body">
        <strong>{ingredientName}</strong> — bon état, odeur de forêt acceptée.
      </p>
      <p className="monoprix-ad-hint">Voir en magasin →</p>
    </Link>
  );
}
