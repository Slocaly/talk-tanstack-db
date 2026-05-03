import { useParams } from '@tanstack/react-router'
import { useRecipeByIdQuery } from '@/hooks/useRecipeByIdQuery'
import { useRecipeDetailIngredientsCatalogQuery } from '@/hooks/useRecipeDetailIngredientsCatalogQuery'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { RecipeDetailPage } from '@/pages/RecipeDetailPage'

export function RecipeDetailPageQueryProvider() {
  const prefix = useAppPathPrefix()
  const { id } = useParams({ strict: false })
  const recipeQuery = useRecipeByIdQuery(prefix, id)
  const ingredientsQuery = useRecipeDetailIngredientsCatalogQuery(prefix)
  return (
    <RecipeDetailPage
      id={id}
      recipeQuery={recipeQuery}
      ingredientsQuery={ingredientsQuery}
    />
  )
}
