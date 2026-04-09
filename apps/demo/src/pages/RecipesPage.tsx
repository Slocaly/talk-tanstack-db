import { useEffect, useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { listIngredients, listRecipes, isRecipeMakable } from '@/lib/api'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'

export function RecipesPage() {
  const [makableOnly, setMakableOnly] = useState(false)
  const [search, setSearch] = useState('')

  const recipesQ = useQuery({
    queryKey: queryKeys.recipes,
    queryFn: listRecipes,
  })

  const ingredientsQ = useQuery({
    queryKey: queryKeys.ingredients,
    queryFn: listIngredients,
  })

  useEffect(() => {
    document.title = 'Recettes — Stock du village gaulois'
  }, [])

  const stockById = useMemo(() => {
    const m = new Map<string, number>()
    ingredientsQ.data?.forEach((i) => m.set(i.id, i.quantity))
    return m
  }, [ingredientsQ.data])

  const ingredientNameById = useMemo(() => {
    const m = new Map<string, string>()
    ingredientsQ.data?.forEach((i) => m.set(i.id, i.name))
    return m
  }, [ingredientsQ.data])

  const visibleRecipes = useMemo(() => {
    if (!recipesQ.data) return []
    let list = recipesQ.data
    if (makableOnly) {
      list = list.filter((r) => isRecipeMakable(r, stockById))
    }
    const q = search.trim().toLowerCase()
    if (q) {
      list = list.filter((recipe) => {
        const ingNames = recipe.ingredients
          .map((line) => ingredientNameById.get(line.ingredientId) ?? '')
          .join(' ')
        const blob =
          `${recipe.name} ${recipe.description ?? ''} ${ingNames}`.toLowerCase()
        return blob.includes(q)
      })
    }
    return list
  }, [
    recipesQ.data,
    makableOnly,
    stockById,
    search,
    ingredientNameById,
  ])

  const pending = recipesQ.isPending || ingredientsQ.isPending
  const error = recipesQ.error ?? ingredientsQ.error

  if (pending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-full max-w-md" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-xl border-2 border-destructive p-6">
        <p className="font-semibold">Impossible de charger les recettes</p>
        <p className="text-sm text-muted-foreground">
          {error instanceof Error ? error.message : 'Erreur'}
        </p>
        <div className="mt-4 flex gap-2">
          <Button type="button" onClick={() => void recipesQ.refetch()}>
            Réessayer (recettes)
          </Button>
          <Button type="button" variant="secondary" onClick={() => void ingredientsQ.refetch()}>
            Réessayer (stock)
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-4xl text-foreground">Recettes</h1>
        <p className="text-muted-foreground">
          Recherchez par nom, description ou ingrédient ; combinez avec le filtre
          stock.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border-2 border-border bg-card/80 p-4">
        <div className="space-y-2">
          <Label htmlFor="recipe-search">Recherche</Label>
          <Input
            id="recipe-search"
            type="search"
            placeholder="Nom de recette, mot-clé, ingrédient…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Recherche de recettes"
          />
        </div>
        <Label className="flex cursor-pointer items-center gap-2 text-sm font-normal">
          <input
            type="checkbox"
            checked={makableOnly}
            onChange={(e) => setMakableOnly(e.target.checked)}
            className="size-4 rounded border-2 border-foreground"
            aria-label="Afficher uniquement les recettes réalisables avec le stock"
          />
          Réalisable avec le stock actuel
        </Label>
      </div>

      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
        {visibleRecipes.length === 0 ? (
          <li className="col-span-full text-center text-muted-foreground">
            Aucune recette ne correspond à la recherche ou aux filtres.
          </li>
        ) : (
          visibleRecipes.map((recipe) => {
            const ok = isRecipeMakable(recipe, stockById)
            return (
              <li key={recipe.id}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <CardTitle className="text-xl">{recipe.name}</CardTitle>
                      <Badge variant={ok ? 'default' : 'outline'}>
                        {ok ? 'Faisable' : 'Incomplet'}
                      </Badge>
                    </div>
                    {recipe.description && (
                      <CardDescription>{recipe.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button asChild size="sm">
                      <Link to="/recipes/$id" params={{ id: recipe.id }}>
                        Voir la recette
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}
