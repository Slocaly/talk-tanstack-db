import { useEffect, useMemo } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getRecipe, listIngredients, isRecipeMakable } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
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

export function RecipeDetailPage() {
  const { id } = useParams({ from: '/recipes/$id' })

  const recipeQ = useQuery({
    queryKey: queryKeys.recipe(id ?? ''),
    queryFn: () => getRecipe(id!),
    enabled: Boolean(id),
  })

  const ingredientsQ = useQuery({
    queryKey: queryKeys.ingredients,
    queryFn: listIngredients,
  })

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
            <Link to="/recipes">Retour aux recettes</Link>
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
          <Link to="/recipes">← Recettes</Link>
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
                {recipe.ingredients.map((line) => {
                  const stock = stockById.get(line.ingredientId) ?? 0
                  const ok = stock >= line.amount
                  const displayName =
                    nameById.get(line.ingredientId) ?? line.ingredientId
                  return (
                    <TableRow key={line.ingredientId}>
                      <TableCell className="font-medium">
                        <Link
                          className="text-primary underline-offset-2 hover:underline"
                          to="/ingredients/$id"
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
                            to="/ingredients/$id"
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
