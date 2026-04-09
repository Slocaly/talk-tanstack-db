import { useState } from 'react'
import type { UseMutationResult } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Ingredient } from '@/types/domain'

type AdjustStockCardProps = {
  quantity: number
  updateQuantityMutation: UseMutationResult<Ingredient, Error, number>
}

export function AdjustStockCard({
  quantity,
  updateQuantityMutation: mutation,
}: AdjustStockCardProps) {
  const [qtyInput, setQtyInput] = useState(() => String(quantity))

  const onSaveQuantity = () => {
    const n = Number.parseFloat(qtyInput.replace(',', '.'))
    if (Number.isNaN(n)) return
    mutation.mutate(n)
  }

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
        {mutation.isError && (
          <p className="text-sm text-destructive" role="alert">
            {mutation.error instanceof Error
              ? mutation.error.message
              : 'Échec de la mise à jour'}
          </p>
        )}
        <Button
          type="button"
          onClick={onSaveQuantity}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Enregistrement…' : 'Enregistrer la quantité'}
        </Button>
      </CardContent>
    </Card>
  )
}
