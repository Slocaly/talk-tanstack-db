import { useParams } from '@tanstack/react-router'
import { useRecipeByIdQuery } from '@/hooks/useRecipeByIdQuery'
import { useRecipeDetailIngredientsCatalogQuery } from '@/hooks/useRecipeDetailIngredientsCatalogQuery'
import { RecipeDetailPage } from '@/pages/RecipeDetailPage'

export function RecipeDetailPageDBProvider() {
  const { id } = useParams({ strict: false })
  const recipeQuery = useRecipeByIdQuery('/tsdb', id)
  const ingredientsQuery = useRecipeDetailIngredientsCatalogQuery('/tsdb')
  return (
    <RecipeDetailPage
      id={id}
      recipeQuery={recipeQuery}
      ingredientsQuery={ingredientsQuery}
    />
  )
}
