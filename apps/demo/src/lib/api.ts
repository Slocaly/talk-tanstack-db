import type { AppPathPrefix } from '@/lib/appPathPrefix'
import type { DashboardSummary, Ingredient, Recipe } from '@/types/domain'

export type PaginatedList<T> = {
  items: T[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

/** Required when calling `listIngredients` / `listRecipes` with prefix `/tsq` (API page walk). */
export type TsqListFetchOptions = {
  fetchPageSize: number
}

const rawBase = import.meta.env.VITE_API_BASE_URL as string | undefined
const base = (rawBase?.replace(/\/$/, '') || '/api').replace(/\/$/, '')

function apiRoot(prefix: AppPathPrefix): string {
  const segment = prefix === '/tsdb' ? 'tsdb' : 'tsq'
  return `${base}/${segment}`
}

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

function tsqListParams(page: number, pageSize: number): string {
  const q = new URLSearchParams()
  q.set('page', String(page))
  q.set('pageSize', String(pageSize))
  return q.toString()
}

export async function listIngredients(
  prefix: AppPathPrefix,
  options?: TsqListFetchOptions
): Promise<Ingredient[]> {
  if (prefix === '/tsq') {
    const pageSize = options?.fetchPageSize
    if (!pageSize || pageSize < 1) {
      throw new Error(
        'listIngredients(/tsq): pass options.fetchPageSize (integer >= 1)'
      )
    }
    const all: Ingredient[] = []
    let page = 1
    for (;;) {
      const chunk = await listIngredientsPaginated(prefix, page, pageSize)
      all.push(...chunk.items)
      if (!chunk.hasNextPage) break
      page += 1
    }
    return all
  }
  const res = await fetch(`${apiRoot(prefix)}/ingredients`)
  return parseJson(res)
}

export async function listIngredientsPaginated(
  prefix: AppPathPrefix,
  page: number,
  pageSize: number
): Promise<PaginatedList<Ingredient>> {
  if (prefix !== '/tsq') {
    const all = await listIngredients(prefix)
    const totalItems = all.length
    const totalPages =
      totalItems === 0 ? 0 : Math.ceil(totalItems / pageSize)
    const pageSafe =
      totalPages === 0 ? 1 : Math.min(Math.max(1, page), totalPages)
    const start = (pageSafe - 1) * pageSize
    const items = all.slice(start, start + pageSize)
    return {
      items,
      page: pageSafe,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: totalPages > 0 && pageSafe < totalPages,
      hasPreviousPage: pageSafe > 1,
    }
  }
  const res = await fetch(
    `${apiRoot(prefix)}/ingredients?${tsqListParams(page, pageSize)}`
  )
  return parseJson(res)
}

export async function getIngredient(
  prefix: AppPathPrefix,
  id: string
): Promise<Ingredient | null> {
  const res = await fetch(`${apiRoot(prefix)}/ingredients/${encodeURIComponent(id)}`)
  if (res.status === 404) return null
  return parseJson(res)
}

export async function updateIngredientQuantity(
  prefix: AppPathPrefix,
  id: string,
  newQuantity: number
): Promise<Ingredient> {
  const res = await fetch(
    `${apiRoot(prefix)}/ingredients/${encodeURIComponent(id)}/quantity`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: newQuantity }),
    }
  )
  return parseJson(res)
}

export async function listRecipes(
  prefix: AppPathPrefix,
  options?: TsqListFetchOptions
): Promise<Recipe[]> {
  if (prefix === '/tsq') {
    const pageSize = options?.fetchPageSize
    if (!pageSize || pageSize < 1) {
      throw new Error(
        'listRecipes(/tsq): pass options.fetchPageSize (integer >= 1)'
      )
    }
    const all: Recipe[] = []
    let page = 1
    for (;;) {
      const chunk = await listRecipesPaginated(prefix, page, pageSize)
      all.push(...chunk.items)
      if (!chunk.hasNextPage) break
      page += 1
    }
    return all
  }
  const res = await fetch(`${apiRoot(prefix)}/recipes`)
  return parseJson(res)
}

export async function listRecipesPaginated(
  prefix: AppPathPrefix,
  page: number,
  pageSize: number
): Promise<PaginatedList<Recipe>> {
  if (prefix !== '/tsq') {
    const all = await listRecipes(prefix)
    const totalItems = all.length
    const totalPages =
      totalItems === 0 ? 0 : Math.ceil(totalItems / pageSize)
    const pageSafe =
      totalPages === 0 ? 1 : Math.min(Math.max(1, page), totalPages)
    const start = (pageSafe - 1) * pageSize
    const items = all.slice(start, start + pageSize)
    return {
      items,
      page: pageSafe,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: totalPages > 0 && pageSafe < totalPages,
      hasPreviousPage: pageSafe > 1,
    }
  }
  const res = await fetch(
    `${apiRoot(prefix)}/recipes?${tsqListParams(page, pageSize)}`
  )
  return parseJson(res)
}

export async function getRecipe(
  prefix: AppPathPrefix,
  id: string
): Promise<Recipe | null> {
  const res = await fetch(`${apiRoot(prefix)}/recipes/${encodeURIComponent(id)}`)
  if (res.status === 404) return null
  return parseJson(res)
}

export async function getDashboardSummary(
  prefix: AppPathPrefix
): Promise<DashboardSummary> {
  const res = await fetch(`${apiRoot(prefix)}/dashboard/summary`)
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
