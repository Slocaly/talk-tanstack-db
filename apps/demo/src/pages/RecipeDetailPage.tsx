import { useEffect, useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import type { UseQueryResult } from '@tanstack/react-query'
import { isRecipeMakable } from '@/lib/api'
import type { Ingredient, Recipe } from '@/types/domain'
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
import { TABLE_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { useAppPathPrefix } from '@/lib/appPathPrefix'

export type RecipeDetailPageProps = {
  id: string | undefined
  recipeQuery: UseQueryResult<Recipe | null, Error>
  ingredientsQuery: UseQueryResult<Ingredient[], Error>
}

export function RecipeDetailPage({
  id,
  recipeQuery: recipeQ,
  ingredientsQuery: ingredientsQ,
}: RecipeDetailPageProps) {
  const prefix = useAppPathPrefix()
  const paginateLinesTable = prefix === '/tsq'
  const [linesPage, setLinesPage] = useState(1)
  const recipesListTo = prefix === '/tsdb' ? '/tsdb/recipes' : '/tsq/recipes'
  const ingredientDetailTo = prefix === '/tsdb' ? '/tsdb/ingredients/$id' : '/tsq/ingredients/$id'

  const stockById = useMemo(() => {
    const m = new Map<string, number>()
    ingredientsQ.data?.forEach((i) => m.set(i.id, i.quantity))
    return m
  }, [ingredientsQ.data])

  const nameById = useMemo(() => {
    const m = new Map<string, string>()
    ingredientsQ.data?.forEach((i) => m.set(i.id, i.name))
    return m
  }, [ingredientsQ.data])

  const ingredientLines = recipeQ.data?.ingredients ?? []

  useEffect(() => {
    if (!paginateLinesTable) return
    setLinesPage(1)
  }, [paginateLinesTable, recipeQ.data?.id])

  const linesTableTotalPages =
    !paginateLinesTable || ingredientLines.length === 0
      ? 0
      : Math.ceil(ingredientLines.length / TABLE_PAGE_SIZE)
  const linesTableSafePage =
    linesTableTotalPages === 0
      ? 1
      : Math.min(linesPage, linesTableTotalPages)
  const tableIngredientLines = useMemo(() => {
    if (!paginateLinesTable) return ingredientLines
    const start = (linesTableSafePage - 1) * TABLE_PAGE_SIZE
    return ingredientLines.slice(start, start + TABLE_PAGE_SIZE)
  }, [paginateLinesTable, ingredientLines, linesTableSafePage])

  useEffect(() => {
    if (!paginateLinesTable) return
    if (linesTableTotalPages > 0 && linesPage > linesTableTotalPages) {
      setLinesPage(linesTableTotalPages)
    }
  }, [paginateLinesTable, linesPage, linesTableTotalPages])

  useEffect(() => {
    if (recipeQ.data) {
      document.title = `${recipeQ.data.name} — Recette`
    }
  }, [recipeQ.data])

  if (!id) {
    return <p className="text-destructive">Identifiant manquant.</p>
  }

  if (recipeQ.isPending || ingredientsQ.isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-40 w-full" />
      </div>
    )
  }

  if (recipeQ.isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Erreur</CardTitle>
          <CardDescription>
            {recipeQ.error instanceof Error
              ? recipeQ.error.message
              : 'Chargement impossible'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" onClick={() => void recipeQ.refetch()}>
            Réessayer
          </Button>
        </CardContent>
      </Card>
    )
  }

  const recipe = recipeQ.data
  if (!recipe) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recette introuvable</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary">
            <Link to={recipesListTo}>Retour aux recettes</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  const makable = isRecipeMakable(recipe, stockById)

  return (
    <div className="space-y-6">
      <div>
        <Button asChild variant="outline" size="sm" className="mb-3">
          <Link to={recipesListTo}>← Recettes</Link>
        </Button>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-4xl text-foreground">{recipe.name}</h1>
          <Badge variant={makable ? 'default' : 'destructive'}>
            {makable ? 'Réalisable' : 'Stock insuffisant'}
          </Badge>
        </div>
        {recipe.description && (
          <p className="mt-2 text-muted-foreground">{recipe.description}</p>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ingrédients et stock</CardTitle>
          <CardDescription>
            Quantités requises face au stock du village (lien vers chaque fiche).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ingrédient</TableHead>
                  <TableHead>Requis</TableHead>
                  <TableHead>En stock</TableHead>
                  <TableHead className="text-right">Fiche</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableIngredientLines.map((line) => {
                  const stock = stockById.get(line.ingredientId) ?? 0
                  const ok = stock >= line.amount
                  const displayName =
                    nameById.get(line.ingredientId) ?? line.ingredientId
                  return (
                    <TableRow key={line.ingredientId}>
                      <TableCell className="font-medium">
                        <Link
                          className="text-primary underline-offset-2 hover:underline"
                          to={ingredientDetailTo}
                          params={{ id: line.ingredientId }}
                        >
                          {displayName}
                        </Link>
                      </TableCell>
                      <TableCell>{line.amount}</TableCell>
                      <TableCell>
                        <span className={ok ? 'text-primary' : 'text-destructive'}>
                          {stock}
                        </span>
                        {!ok && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            (manque {line.amount - stock})
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild size="sm" variant="secondary">
                          <Link
                            to={ingredientDetailTo}
                            params={{ id: line.ingredientId }}
                          >
                            Détails
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
          {paginateLinesTable ? (
            <ListPaginationBar
              page={linesTableSafePage}
              totalPages={linesTableTotalPages}
              totalItems={ingredientLines.length}
              pageSize={TABLE_PAGE_SIZE}
              onPageChange={setLinesPage}
            />
          ) : null}
          <Separator />
          <p className="text-sm text-muted-foreground">
            Les unités sont celles du stock (kg, fioles, miches, etc.) — comparaison
            indicative pour la démo.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
