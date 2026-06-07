import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type AdjustStockCardProps = {
  quantity: number;
  onMutate: (newQuantity: number) => void;
  isPending: boolean;
};

export function AdjustStockCard({
  quantity,
  onMutate,
  isPending,
}: AdjustStockCardProps) {
  const [qtyInput, setQtyInput] = useState(() => String(quantity));

  const onSaveQuantity = () => {
    const n = Number.parseFloat(qtyInput.replace(',', '.'));
    if (Number.isNaN(n)) return;
    onMutate(n);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ajuster le stock</CardTitle>
        <CardDescription>
          Enregistrée sur l’API — met à jour le tableau de bord et les recettes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="qty">Nouvelle quantité</Label>
          <Input
            id="qty"
            type="text"
            inputMode="decimal"
            value={qtyInput}
            onChange={(e) => setQtyInput(e.target.value)}
            aria-label="Nouvelle quantité en stock"
          />
        </div>
        <Button
          type="button"
          onClick={onSaveQuantity}
          disabled={isPending}
        >
          {isPending ? 'Enregistrement…' : 'Enregistrer la quantité'}
        </Button>
      </CardContent>
    </Card>
  );
}
