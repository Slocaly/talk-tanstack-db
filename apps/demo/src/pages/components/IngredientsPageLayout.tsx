import { ListPaginationBar } from "@/components/ListPaginationBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useIngredientsFilters } from "@/hooks/useIngredientsFilters";
import { useAppPathPrefix } from "@/lib/appPathPrefix";
import { categoryLabels } from "@/lib/categoryLabels";
import type { Ingredient, IngredientCategory } from "@/types/domain";
import { Link } from "@tanstack/react-router";
import { IngredientsTableSkeleton } from "./IngredientsTableSkeleton";

const categories: (IngredientCategory | 'tous')[] = [
    'tous',
    'viande',
    'poisson',
    'cereales',
    'boisson',
    'herbe',
    'laitier',
    'autre',
]

type IngredientsPageLayoutProps = {
    ingredients: Ingredient[],
    totalItems: number,
    totalPages: number,
    isPending: boolean,
}

export function IngredientsPageLayout({
    ingredients,
    totalItems,
    totalPages,
    isPending,
}: IngredientsPageLayoutProps) {
    const { filters: { search, category, expiringSoon, inStockOnly, page, pageSize }, setFilters } = useIngredientsFilters();
    const prefix = useAppPathPrefix();
    const ingredientDetailTo = `${prefix}/ingredients/$id` as const;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="mb-2 text-4xl text-foreground">Ingrédients</h1>
                <p className="text-muted-foreground">
                    Cherchez, filtrez et ouvrez la fiche pour la carte et la récolte.
                </p>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border-2 border-border bg-card/80 p-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="ing-search">Recherche</Label>
                        <Input
                            id="ing-search"
                            placeholder="Nom, lieu, récolte, catégorie…"
                            value={search}
                            onChange={(e) => setFilters({ search: e.target.value })}
                            aria-label="Recherche d’ingrédients"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ing-cat">Catégorie</Label>
                        <Select
                            value={category}
                            onValueChange={(category) => setFilters({ category: category as IngredientCategory | 'tous' })}
                        >
                            <SelectTrigger id="ing-cat" aria-label="Filtrer par catégorie">
                                <SelectValue placeholder="Catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((c) => (
                                    <SelectItem key={c} value={c}>
                                        {c === 'tous' ? 'Toutes les catégories' : categoryLabels[c]}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={expiringSoon}
                            onChange={(e) => setFilters({ expiringSoon: e.target.checked })}
                            className="size-4 rounded border-2 border-foreground"
                        />
                        Péremption dans les 7 jours
                    </label>
                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={inStockOnly}
                            onChange={(e) => setFilters({ inStockOnly: e.target.checked })}
                            className="size-4 rounded border-2 border-foreground"
                        />
                        Uniquement en stock
                    </label>
                </div>
            </div>

            <div className="rounded-xl border-2 border-border">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nom</TableHead>
                                <TableHead>Stock</TableHead>
                                <TableHead>Péremption</TableHead>
                                <TableHead>Catégorie</TableHead>
                                <TableHead className="text-right">Fiche</TableHead>
                            </TableRow>
                        </TableHeader>
                        {isPending ? (
                            <IngredientsTableSkeleton rows={pageSize} />
                        ) : (
                            <TableBody>
                                {ingredients.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={5}
                                            className="text-center text-muted-foreground"
                                        >
                                            Aucun ingrédient ne correspond aux filtres.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    ingredients.map((ing) => (
                                        <TableRow key={ing.id}>
                                            <TableCell className="font-medium">{ing.name}</TableCell>
                                            <TableCell>
                                                {ing.quantity} {ing.unit}
                                            </TableCell>
                                            <TableCell>
                                                <time dateTime={ing.dueDate}>
                                                    {new Date(ing.dueDate).toLocaleDateString('fr-FR')}
                                                </time>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">
                                                    {categoryLabels[ing.category]}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button asChild size="sm" variant="secondary">
                                                    <Link to={ingredientDetailTo} params={{ id: ing.id }}>
                                                        Détails
                                                    </Link>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        )}
                    </Table>
                </div>
                <ListPaginationBar
                    className="px-4 pb-4"
                    page={page}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    pageSize={pageSize}
                    onPageChange={(page) => setFilters({ page })}
                    isLoading={isPending}
                />
            </div>
        </div>
    )
}
