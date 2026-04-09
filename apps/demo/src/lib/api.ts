import type { DashboardSummary, Ingredient, Recipe } from '@/types/domain'

const rawBase = import.meta.env.VITE_API_BASE_URL as string | undefined
const base = (rawBase?.replace(/\/$/, '') || '/api').replace(/\/$/, '')

async function readErrorMessage(res: Response): Promise<string> {
  const text = await res.text()
  try {
    const j = JSON.parse(text) as { message?: unknown }
    if (typeof j.message === 'string') return j.message
    if (Array.isArray(j.message)) return j.message.join(', ')
  } catch {
    /* ignore */
  }
  return text || res.statusText
}

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(await readErrorMessage(res))
  }
  return res.json() as Promise<T>
}

export async function listIngredients(): Promise<Ingredient[]> {
  const res = await fetch(`${base}/ingredients`)
  return parseJson(res)
}

export async function getIngredient(id: string): Promise<Ingredient | null> {
  const res = await fetch(`${base}/ingredients/${encodeURIComponent(id)}`)
  if (res.status === 404) return null
  return parseJson(res)
}

export async function updateIngredientQuantity(
  id: string,
  newQuantity: number
): Promise<Ingredient> {
  const res = await fetch(
    `${base}/ingredients/${encodeURIComponent(id)}/quantity`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: newQuantity }),
    }
  )
  return parseJson(res)
}

export async function listRecipes(): Promise<Recipe[]> {
  const res = await fetch(`${base}/recipes`)
  return parseJson(res)
}

export async function getRecipe(id: string): Promise<Recipe | null> {
  const res = await fetch(`${base}/recipes/${encodeURIComponent(id)}`)
  if (res.status === 404) return null
  return parseJson(res)
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
  const res = await fetch(`${base}/dashboard/summary`)
  return parseJson(res)
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
