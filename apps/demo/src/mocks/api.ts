import type { DashboardSummary, Ingredient, Recipe } from '@/types/domain'
import { delay } from '@/mocks/delay'
import { seedIngredients, seedRecipes } from '@/mocks/seed'

function cloneIngredients(list: Ingredient[]): Ingredient[] {
  return list.map((i) => ({ ...i }))
}

const ingredientsState = cloneIngredients(seedIngredients)
const recipesState: Recipe[] = seedRecipes.map((r) => ({
  ...r,
  ingredients: r.ingredients.map((x) => ({ ...x })),
}))

function daysUntil(dateIso: string): number {
  const d = new Date(dateIso)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  d.setHours(0, 0, 0, 0)
  return Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

export async function listIngredients(): Promise<Ingredient[]> {
  await delay()
  return cloneIngredients(ingredientsState)
}

export async function getIngredient(id: string): Promise<Ingredient | null> {
  await delay()
  const found = ingredientsState.find((i) => i.id === id)
  return found ? { ...found } : null
}

export async function listRecipes(): Promise<Recipe[]> {
  await delay()
  return recipesState.map((r) => ({
    ...r,
    ingredients: r.ingredients.map((x) => ({ ...x })),
  }))
}

export async function getRecipe(id: string): Promise<Recipe | null> {
  await delay()
  const found = recipesState.find((r) => r.id === id)
  if (!found) return null
  return {
    ...found,
    ingredients: found.ingredients.map((x) => ({ ...x })),
  }
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
  await delay()
  const list = ingredientsState
  const inStock = list.filter((i) => i.quantity > 0)
  const totalStockUnits = inStock.reduce((s, i) => s + i.quantity, 0)
  const sortedByDue = [...inStock].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  )
  const nextExpiring = sortedByDue[0] ?? null
  const expiringWithin7Days = inStock.filter((i) => {
    const d = daysUntil(i.dueDate)
    return d >= 0 && d <= 7
  }).length
  const lowStockCount = inStock.filter((i) => i.quantity <= 2).length

  return {
    totalIngredientKinds: inStock.length,
    totalStockUnits,
    nextExpiring: nextExpiring ? { ...nextExpiring } : null,
    expiringWithin7Days,
    lowStockCount,
  }
}

export async function updateIngredientQuantity(
  id: string,
  newQuantity: number
): Promise<Ingredient> {
  await delay(200)
  const idx = ingredientsState.findIndex((i) => i.id === id)
  if (idx === -1) {
    throw new Error('Ingrédient introuvable')
  }
  const next = Math.max(0, Math.round(newQuantity * 100) / 100)
  ingredientsState[idx] = { ...ingredientsState[idx], quantity: next }
  return { ...ingredientsState[idx] }
}

export function isRecipeMakable(
  recipe: Recipe,
  stockById: Map<string, number>
): boolean {
  return recipe.ingredients.every((line) => {
    const q = stockById.get(line.ingredientId) ?? 0
    return q >= line.amount
  })
}
