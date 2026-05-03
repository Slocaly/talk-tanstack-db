import { atom } from "jotai";
import type { IngredientCategory } from "@/types/domain";

export const ingredientsPageSearchAtom = atom("");

export const ingredientsPageCategoryAtom = atom<IngredientCategory | "tous">(
  "tous",
);

export const ingredientsPageExpiringSoonAtom = atom(false);

export const ingredientsPageInStockOnlyAtom = atom(false);

/** Table pagination page (1-based). */
export const ingredientsPageTablePageAtom = atom(1);

export const ingredientsPagePageSizeAtom = atom(10);
