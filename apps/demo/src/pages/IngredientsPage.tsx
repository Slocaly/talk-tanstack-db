import { useEffect } from 'react'
import { useIngredientsQuery } from '@/hooks/useIngredientsQuery'
import { Button } from '@/components/ui/button'
import { IngredientsPageLayout } from './components/IngredientsPageLayout'

export function IngredientsPage() {
  const { data, refetch, error, isPending } = useIngredientsQuery()

  const ingredients = data?.items ?? []

  useEffect(() => {
    document.title = 'Ingrédients — Stock du village gaulois'
  }, [])

  if (error) {
    return (
      <div className="rounded-xl border-2 border-destructive bg-card p-6">
        <p className="font-semibold text-destructive">Échec du chargement</p>
        <p className="text-sm text-muted-foreground">
          {error instanceof Error
            ? error.message
            : 'Erreur inconnue'}
        </p>
        <Button className="mt-4" type="button" onClick={() => void refetch()}>
          Réessayer
        </Button>
      </div>
    )
  }

  if (!ingredients) {
    return null
  }

  return (
    <IngredientsPageLayout
      ingredients={ingredients}
      totalItems={data?.totalItems ?? 0}
      totalPages={data?.totalPages ?? 0}
      isPending={isPending}
    />
  )
}
