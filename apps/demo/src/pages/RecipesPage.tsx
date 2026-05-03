import { useEffect } from 'react'
import { ListPaginationBar } from '@/components/ListPaginationBar'
import { Link } from '@tanstack/react-router'
import type { Recipe } from '@/types/domain'
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
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { useRecipesFilters } from '@/hooks/useRecipesFilters'

export interface RecipesPageProps {
  recipes: Recipe[]
  isPending: boolean
  error: Error | null
  refetch: () => void
  totalItems: number
  totalPages: number
}

export function RecipesPage({ recipes, isPending, error, refetch, totalItems, totalPages }: RecipesPageProps) {
  const prefix = useAppPathPrefix()
  const {
    filters: { search, makableOnly, page, pageSize },
    setFilters,
  } = useRecipesFilters()

  useEffect(() => {
    document.title = 'Recettes — Stock du village gaulois'
  }, [])

  if (error) {
    return (
      <div className="rounded-xl border-2 border-destructive p-6">
        <p className="font-semibold">Impossible de charger les recettes</p>
        <p className="text-sm text-muted-foreground">
          {error instanceof Error ? error.message : 'Erreur'}
        </p>
        <div className="mt-4 flex gap-2">
          <Button type="button" onClick={refetch}>
            Réessayer
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
            onChange={(e) => setFilters({ search: e.target.value })}
            aria-label="Recherche de recettes"
          />
        </div>
        <Label className="flex cursor-pointer items-center gap-2 text-sm font-normal">
          <input
            type="checkbox"
            checked={makableOnly}
            onChange={(e) => setFilters({ makableOnly: e.target.checked })}
            className="size-4 rounded border-2 border-foreground"
            aria-label="Afficher uniquement les recettes réalisables avec le stock"
          />
          Réalisable avec le stock actuel
        </Label>
      </div>

      <ul
        className="grid list-none gap-4 p-0 sm:grid-cols-2"
        aria-busy={isPending || undefined}
      >
        {isPending
          ? Array.from({ length: 4 }, (_, i) => (
              <li key={`skeleton-${i}`}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <Skeleton className="h-7 w-2/3 max-w-xs" />
                      <Skeleton className="h-5 w-20 shrink-0 rounded-full" />
                    </div>
                    <div className="space-y-2 pt-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-9 w-36" />
                  </CardContent>
                </Card>
              </li>
            ))
          : recipes.length === 0 ? (
              <li className="col-span-full text-center text-muted-foreground">
                Aucune recette ne correspond à la recherche ou aux filtres.
              </li>
            ) : (
              recipes.map((recipe) => {
                return (
                  <li key={recipe.id}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <CardTitle className="text-xl">{recipe.name}</CardTitle>
                          <Badge variant="default">
                            Faisable
                          </Badge>
                        </div>
                        {recipe.description && (
                          <CardDescription>{recipe.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <Button asChild size="sm">
                          <Link
                            to={`${prefix}/recipes/$id`}
                            params={{ id: recipe.id }}
                          >
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
      <ListPaginationBar
        page={page}
        totalPages={totalPages}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={(p) => setFilters({ page: p })}
        isLoading={isPending}
      />
    </div>
  )
}
