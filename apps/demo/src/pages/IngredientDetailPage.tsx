import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import type { UseQueryResult } from '@tanstack/react-query'
import { categoryLabels } from '@/lib/categoryLabels'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { IngredientMap } from '@/components/map/IngredientMap'
import { AdjustStockCardMutationProvider } from '@/pages/providers/AdjustStockCardMutationProvider'
import type { Ingredient } from '@/types/domain'

export type IngredientDetailPageProps = {
  id: string | undefined
  ingredientQuery: UseQueryResult<Ingredient | null, Error>
}

export function IngredientDetailPage({ id, ingredientQuery: query }: IngredientDetailPageProps) {
  useEffect(() => {
    const name = query.data?.name
    if (name) {
      document.title = `${name} — Ingrédient`
    }
  }, [query.data?.name])

  if (!id) {
    return <p className="text-destructive">Identifiant manquant.</p>
  }

  if (query.isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-48 w-full" />
      </div>
    )
  }

  if (query.isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Erreur</CardTitle>
          <CardDescription>
            {query.error instanceof Error
              ? query.error.message
              : 'Chargement impossible'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" onClick={() => void query.refetch()}>
            Réessayer
          </Button>
        </CardContent>
      </Card>
    )
  }

  const ing = query.data
  if (!ing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Ingrédient introuvable</CardTitle>
          <CardDescription>Cette référence n’existe pas dans le stock.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary">
            <Link to="/ingredients">Retour à la liste</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  const hasMapCoords = Number.isFinite(ing.lat) && Number.isFinite(ing.lng)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Button asChild variant="outline" size="sm" className="mb-3">
            <Link to="/ingredients">← Ingrédients</Link>
          </Button>
          <h1 className="text-4xl text-foreground">{ing.name}</h1>
          <Badge className="mt-2" variant="secondary">
            {categoryLabels[ing.category]}
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informations</CardTitle>
            <CardDescription>Quantité, péremption et conservation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Stock actuel</p>
              <p className="font-[family-name:var(--font-display)] text-2xl text-primary">
                {ing.quantity} {ing.unit}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date limite</p>
              <p>
                <time dateTime={ing.dueDate}>
                  {new Date(ing.dueDate).toLocaleDateString('fr-FR', {
                    dateStyle: 'long',
                  })}
                </time>
              </p>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-semibold text-foreground">Où trouver</p>
              <p className="text-muted-foreground">{ing.whereToFind}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Comment récolter</p>
              <p className="text-muted-foreground">{ing.howToHarvest}</p>
            </div>
          </CardContent>
        </Card>

        <AdjustStockCardMutationProvider
          key={`${ing.id}-${ing.quantity}`}
          ingredientId={ing.id}
          quantity={ing.quantity}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carte du lieu</CardTitle>
          <CardDescription>
            Repère approximatif dans la forêt d’Armorique (OpenStreetMap).
          </CardDescription>
        </CardHeader>
        <CardContent>
          {hasMapCoords ? (
            <IngredientMap
              lat={ing.lat}
              lng={ing.lng}
              title={ing.name}
              snippet={ing.whereToFind}
            />
          ) : (
            <p className="text-muted-foreground">
              Aucune coordonnée n’est renseignée pour cet ingrédient.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
