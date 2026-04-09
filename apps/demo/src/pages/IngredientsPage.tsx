import { useEffect, useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { listIngredients } from '@/mocks/api'
import { queryKeys } from '@/lib/queryKeys'
import type { IngredientCategory } from '@/types/domain'
import { categoryLabels } from '@/lib/categoryLabels'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

const categories: (IngredientCategory | 'tous')[] = [
  'tous',
  'viande',
  'poisson',
  'cereales',
  'boisson',
  'herbe',
  'laitier',
  'autre',
]

function daysUntil(dateIso: string): number {
  const d = new Date(dateIso)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  d.setHours(0, 0, 0, 0)
  return Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

export function IngredientsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<IngredientCategory | 'tous'>('tous')
  const [expiringSoon, setExpiringSoon] = useState(false)
  const [inStockOnly, setInStockOnly] = useState(false)

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: queryKeys.ingredients,
    queryFn: listIngredients,
  })

  useEffect(() => {
    document.title = 'Ingrédients — Stock du village gaulois'
  }, [])

  const filtered = useMemo(() => {
    if (!data) return []
    const q = search.trim().toLowerCase()
    return data.filter((ing) => {
      if (inStockOnly && ing.quantity <= 0) return false
      if (category !== 'tous' && ing.category !== category) return false
      if (expiringSoon) {
        const days = daysUntil(ing.dueDate)
        if (days < 0 || days > 7) return false
      }
      if (!q) return true
      const blob =
        `${ing.name} ${ing.whereToFind} ${ing.howToHarvest} ${categoryLabels[ing.category]}`.toLowerCase()
      return blob.includes(q)
    })
  }, [data, search, category, expiringSoon, inStockOnly])

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-full max-w-md" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="rounded-xl border-2 border-destructive bg-card p-6">
        <p className="font-semibold text-destructive">Échec du chargement</p>
        <p className="text-sm text-muted-foreground">
          {error instanceof Error ? error.message : 'Erreur inconnue'}
        </p>
        <Button className="mt-4" type="button" onClick={() => void refetch()}>
          Réessayer
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-4xl text-foreground">Ingrédients</h1>
        <p className="text-muted-foreground">
          Cherchez, filtrez et ouvrez la fiche pour la carte et la récolte.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border-2 border-border bg-card/80 p-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="ing-search">Recherche</Label>
            <Input
              id="ing-search"
              placeholder="Nom, lieu, récolte, catégorie…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Recherche d’ingrédients"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ing-cat">Catégorie</Label>
            <Select
              value={category}
              onValueChange={(v) => setCategory(v as IngredientCategory | 'tous')}
            >
              <SelectTrigger id="ing-cat" aria-label="Filtrer par catégorie">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === 'tous' ? 'Toutes les catégories' : categoryLabels[c]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={expiringSoon}
              onChange={(e) => setExpiringSoon(e.target.checked)}
              className="size-4 rounded border-2 border-foreground"
            />
            Péremption dans les 7 jours
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="size-4 rounded border-2 border-foreground"
            />
            Uniquement en stock
          </label>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border-2 border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Péremption</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead className="text-right">Fiche</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  Aucun ingrédient ne correspond aux filtres.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((ing) => (
                <TableRow key={ing.id}>
                  <TableCell className="font-medium">{ing.name}</TableCell>
                  <TableCell>
                    {ing.quantity} {ing.unit}
                  </TableCell>
                  <TableCell>
                    <time dateTime={ing.dueDate}>
                      {new Date(ing.dueDate).toLocaleDateString('fr-FR')}
                    </time>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{categoryLabels[ing.category]}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild size="sm" variant="secondary">
                      <Link to="/ingredients/$id" params={{ id: ing.id }}>
                        Détails
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
