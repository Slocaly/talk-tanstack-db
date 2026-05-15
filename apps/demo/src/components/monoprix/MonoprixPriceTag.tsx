import type { MonoprixPrice } from '@/lib/monoprixPrice';
import { cn } from '@/lib/utils';

type MonoprixPriceTagProps = {
  price: MonoprixPrice;
  size?: 'md' | 'lg';
  className?: string;
};

export function MonoprixPriceTag({
  price,
  size = 'md',
  className,
}: MonoprixPriceTagProps) {
  const coinSize = size === 'lg' ? 'h-12 w-12' : 'h-9 w-9';
  const textSize =
    size === 'lg'
      ? 'text-5xl'
      : 'text-3xl';

  return (
    <p
      className={cn(
        'monoprix-price-tag flex items-center gap-2 font-[family-name:var(--font-display)] text-[var(--monoprix-red)]',
        textSize,
        className,
      )}
    >
      <span>{price.formatted}</span>
      <img
        src="/sesterce.png"
        alt=""
        width={size === 'lg' ? 48 : 36}
        height={size === 'lg' ? 48 : 36}
        className={cn(coinSize, 'shrink-0 drop-shadow-[2px_2px_0_var(--bd-ink)]')}
        aria-hidden
      />
    </p>
  );
}
