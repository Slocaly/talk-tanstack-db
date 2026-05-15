import { Link } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { categoryLabels } from '@/lib/categoryLabels';
import { MonoprixPriceTag } from '@/components/monoprix/MonoprixPriceTag';
import { getMonoprixPrice } from '@/lib/monoprixPrice';
import type { Ingredient } from '@/types/domain';

const categoryEmoji: Record<Ingredient['category'], string> = {
  viande: '🥩',
  poisson: '🐟',
  cereales: '🌾',
  boisson: '🍺',
  herbe: '🌿',
  laitier: '🧀',
  autre: '📦',
};

type MonoprixProductCardProps = {
  ingredient: Ingredient;
};

export function MonoprixProductCard({ ingredient }: MonoprixProductCardProps) {
  const price = getMonoprixPrice(ingredient);

  return (
    <Card className="monoprix-product-card h-full overflow-hidden">
      <CardHeader className="pb-2">
        <div
          className="mb-3 flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-[var(--bd-ink)] bg-white text-5xl"
          aria-hidden
        >
          {categoryEmoji[ingredient.category]}
        </div>
        <CardTitle className="text-xl leading-tight">{ingredient.name}</CardTitle>
        <Badge variant="secondary" className="w-fit">
          {categoryLabels[ingredient.category]}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <MonoprixPriceTag price={price} />
        <p className="text-xs text-muted-foreground">{price.perUnit}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          to="/tsq/monoprix/$id"
          params={{ id: ingredient.id }}
          className="bd-comic-pill inline-flex w-full justify-center bg-[var(--monoprix-red)] px-3 py-2 text-sm font-bold text-white no-underline"
        >
          Voir le produit
        </Link>
      </CardFooter>
    </Card>
  );
}
