import { useParams } from '@tanstack/react-router'
import { useRecipeByIdQuery } from '@/hooks/useRecipeByIdQuery'
import { useRecipeDetailIngredientsCatalogQuery } from '@/hooks/useRecipeDetailIngredientsCatalogQuery'
import { RecipeDetailPage } from '@/pages/RecipeDetailPage'

export function RecipeDetailPageQueryProvider() {
  const { id } = useParams({ strict: false })
  const recipeQuery = useRecipeByIdQuery('/tsq', id)
  const ingredientsQuery = useRecipeDetailIngredientsCatalogQuery('/tsq')
  return (
    <RecipeDetailPage
      id={id}
      recipeQuery={recipeQuery}
      ingredientsQuery={ingredientsQuery}
    />
  )
}
