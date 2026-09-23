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
import { t } from '@/i18n';

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
        <CardTitle>{t('ingredients.adjustTitle')}</CardTitle>
        <CardDescription>{t('ingredients.adjustDesc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="qty">{t('ingredients.newQuantity')}</Label>
          <Input
            id="qty"
            type="text"
            inputMode="decimal"
            value={qtyInput}
            onChange={(e) => setQtyInput(e.target.value)}
            aria-label={t('ingredients.newQuantityAria')}
          />
        </div>
        <Button type="button" onClick={onSaveQuantity} disabled={isPending}>
          {isPending ? t('common.saving') : t('ingredients.saveQuantity')}
        </Button>
      </CardContent>
    </Card>
  );
}
