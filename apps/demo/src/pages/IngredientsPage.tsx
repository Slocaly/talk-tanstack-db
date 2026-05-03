import { useEffect, useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useIngredientsCatalogQuery } from '@/hooks/useIngredientsCatalogQuery'
import { useIngredientsPaginatedTableQuery } from '@/hooks/useIngredientsPaginatedTableQuery'
import type { Ingredient, IngredientCategory } from '@/types/domain'
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
import { ListPaginationBar } from '@/components/ListPaginationBar'
import { type PaginatedList } from '@/lib/api'
import { TABLE_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { useAppPathPrefix } from '@/lib/appPathPrefix'

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
  return <IngredientsPageSlice />
}

function IngredientsPageSlice() {
  const prefix = useAppPathPrefix()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<IngredientCategory | 'tous'>('tous')
  const [expiringSoon, setExpiringSoon] = useState(false)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [tablePage, setTablePage] = useState(1)

  const filtersActive =
    search.trim().length > 0 ||
    category !== 'tous' ||
    expiringSoon ||
    inStockOnly

  const catalogQuery = useIngredientsCatalogQuery(prefix, filtersActive)
  const pageQuery = useIngredientsPaginatedTableQuery(
    prefix,
    tablePage,
    filtersActive,
  )

  const listQuery = filtersActive ? catalogQuery : pageQuery
  const { data: rawData, refetch } = listQuery

  useEffect(() => {
    document.title = 'Ingrédients — Stock du village gaulois'
  }, [])

  const filtered = useMemo(() => {
    if (!rawData) return []
    if (!filtersActive) {
      return (rawData as PaginatedList<Ingredient>).items
    }
    const all = rawData as Ingredient[]
    const q = search.trim().toLowerCase()
    return all.filter((ing) => {
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
  }, [rawData, filtersActive, search, category, expiringSoon, inStockOnly])

  useEffect(() => {
    setTablePage(1)
  }, [search, category, expiringSoon, inStockOnly])

  const paginatedMeta =
    !filtersActive && rawData ? (rawData as PaginatedList<Ingredient>) : null

  const tableTotalPages = filtersActive
    ? filtered.length === 0
      ? 0
      : Math.ceil(filtered.length / TABLE_PAGE_SIZE)
    : paginatedMeta?.totalPages ?? 0

  const tableSafePage =
    tableTotalPages === 0 ? 1 : Math.min(tablePage, tableTotalPages)

  const tableRows = useMemo(() => {
    if (!rawData) return []
    if (!filtersActive) {
      return (rawData as PaginatedList<Ingredient>).items
    }
    const start = (tableSafePage - 1) * TABLE_PAGE_SIZE
    return filtered.slice(start, start + TABLE_PAGE_SIZE)
  }, [rawData, filtersActive, filtered, tableSafePage])

  const filteredLength = filtersActive
    ? filtered.length
    : paginatedMeta?.totalItems ?? 0

  useEffect(() => {
    if (filtersActive && tableTotalPages > 0 && tablePage > tableTotalPages) {
      setTablePage(tableTotalPages)
    }
  }, [filtersActive, tablePage, tableTotalPages])

  const listPending = listQuery.isPending && !listQuery.data

  if (listPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-full max-w-md" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (listQuery.isError) {
    return (
      <div className="rounded-xl border-2 border-destructive bg-card p-6">
        <p className="font-semibold text-destructive">Échec du chargement</p>
        <p className="text-sm text-muted-foreground">
          {listQuery.error instanceof Error
            ? listQuery.error.message
            : 'Erreur inconnue'}
        </p>
        <Button className="mt-4" type="button" onClick={() => void refetch()}>
          Réessayer
        </Button>
      </div>
    )
  }

  return (
    <IngredientsPageLayout
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
      expiringSoon={expiringSoon}
      setExpiringSoon={setExpiringSoon}
      inStockOnly={inStockOnly}
      setInStockOnly={setInStockOnly}
      filteredLength={filteredLength}
      tableRows={tableRows}
      tableSafePage={tableSafePage}
      tableTotalPages={tableTotalPages}
      setTablePage={setTablePage}
    />
  )
}

type IngredientsPageLayoutProps = {
  search: string
  setSearch: (v: string) => void
  category: IngredientCategory | 'tous'
  setCategory: (v: IngredientCategory | 'tous') => void
  expiringSoon: boolean
  setExpiringSoon: (v: boolean) => void
  inStockOnly: boolean
  setInStockOnly: (v: boolean) => void
  filteredLength: number
  tableRows: Ingredient[]
  tableSafePage: number
  tableTotalPages: number
  setTablePage: (p: number) => void
}

function IngredientsPageLayout({
  search,
  setSearch,
  category,
  setCategory,
  expiringSoon,
  setExpiringSoon,
  inStockOnly,
  setInStockOnly,
  filteredLength,
  tableRows,
  tableSafePage,
  tableTotalPages,
  setTablePage,
}: IngredientsPageLayoutProps) {
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

      <div className="rounded-xl border-2 border-border">
        <div className="overflow-x-auto">
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
              {filteredLength === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    Aucun ingrédient ne correspond aux filtres.
                  </TableCell>
                </TableRow>
              ) : (
                tableRows.map((ing) => (
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
                      <Badge variant="outline">
                        {categoryLabels[ing.category]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild size="sm" variant="secondary">
                        <Link to="/tsq/ingredients/$id" params={{ id: ing.id }}>
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
        <ListPaginationBar
          className="px-4 pb-4"
          page={tableSafePage}
          totalPages={tableTotalPages}
          totalItems={filteredLength}
          pageSize={TABLE_PAGE_SIZE}
          onPageChange={setTablePage}
        />
      </div>
    </div>
  )
}
