export type IngredientCategory =
  | 'viande'
  | 'poisson'
  | 'cereales'
  | 'boisson'
  | 'herbe'
  | 'laitier'
  | 'autre';

export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  dueDate: string;
  whereToFind: string;
  howToHarvest: string;
  lat: number;
  lng: number;
  category: IngredientCategory;
};

export type RecipeIngredient = {
  ingredientId: string;
  amount: number;
};

export type Recipe = {
  id: string;
  name: string;
  description?: string;
  ingredients: RecipeIngredient[];
};

export type DashboardSummary = {
  totalIngredientKinds: number;
  totalStockUnits: number;
  nextExpiring: Ingredient | null;
  expiringWithin7Days: number;
  lowStockCount: number;
};

export type PaginatedList<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
