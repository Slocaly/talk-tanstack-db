import { useState } from 'react';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import type { CreateRecipeInput } from '@/lib/api';
import type { Ingredient, RecipeIngredient } from '@/types/domain';
import { slugifyRecipeName } from '@/lib/recipeId';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { t } from '@/i18n';

type IngredientLine = {
  key: string;
  ingredientId: string;
  amount: string;
};

export type AddRecipeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ingredients: Ingredient[];
  onSubmit: (input: CreateRecipeInput) => Promise<void>;
  isPending: boolean;
  error: Error | null;
};

function emptyLine(): IngredientLine {
  return {
    key: crypto.randomUUID(),
    ingredientId: '',
    amount: '1',
  };
}

export function AddRecipeModal({
  open,
  onOpenChange,
  ingredients,
  onSubmit,
  isPending,
  error,
}: AddRecipeModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lines, setLines] = useState<IngredientLine[]>([emptyLine()]);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setValidationError(t('addRecipe.nameRequired'));
      return;
    }

    const recipeIngredients: RecipeIngredient[] = [];
    for (const line of lines) {
      if (!line.ingredientId) continue;
      const amount = Number.parseFloat(line.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        setValidationError(t('addRecipe.amountPositive'));
        return;
      }
      recipeIngredients.push({
        ingredientId: line.ingredientId,
        amount,
      });
    }

    setValidationError(null);
    try {
      await onSubmit({
        id: slugifyRecipeName(trimmedName),
        name: trimmedName,
        description: description.trim() || undefined,
        ingredients: recipeIngredients,
      });
      setName('');
      setDescription('');
      setLines([emptyLine()]);
      setValidationError(null);
      onOpenChange(false);
    } catch {
      /* parent exposes error via error prop */
    }
  };

  const displayError =
    validationError ??
    (error instanceof Error
      ? error.message
      : error
        ? t('common.error')
        : null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90vh,720px)] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{t('addRecipe.title')}</DialogTitle>
          <DialogDescription>{t('addRecipe.description')}</DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={(e) => void handleSubmit(e)}>
          <div className="space-y-2">
            <Label htmlFor="recipe-name">{t('common.name')}</Label>
            <Input
              id="recipe-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('addRecipe.namePlaceholder')}
              required
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="recipe-description">
              {t('addRecipe.descriptionLabel')}
            </Label>
            <textarea
              id="recipe-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t('addRecipe.descriptionPlaceholder')}
              rows={3}
              className="flex min-h-[4.5rem] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
            />
          </div>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium">
              {t('addRecipe.ingredients')}
            </legend>
            <ul className="space-y-3 p-0">
              {lines.map((line, index) => (
                <li
                  key={line.key}
                  className="grid gap-2 rounded-lg border border-border/80 bg-background/60 p-3 sm:grid-cols-[1fr_6rem_auto]"
                >
                  <div className="space-y-1.5">
                    <Label
                      className="sr-only"
                      htmlFor={`ingredient-${line.key}`}
                    >
                      {t('addRecipe.ingredientN', { n: index + 1 })}
                    </Label>
                    <Select
                      value={line.ingredientId || undefined}
                      onValueChange={(value) =>
                        setLines((prev) =>
                          prev.map((row) =>
                            row.key === line.key
                              ? { ...row, ingredientId: value }
                              : row,
                          ),
                        )
                      }
                    >
                      <SelectTrigger
                        id={`ingredient-${line.key}`}
                        className="w-full"
                      >
                        <SelectValue
                          placeholder={t('addRecipe.chooseIngredient')}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {ingredients.map((ingredient) => (
                          <SelectItem key={ingredient.id} value={ingredient.id}>
                            {ingredient.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="sr-only" htmlFor={`amount-${line.key}`}>
                      {t('addRecipe.quantity')}
                    </Label>
                    <Input
                      id={`amount-${line.key}`}
                      type="number"
                      min={0.01}
                      step="any"
                      value={line.amount}
                      onChange={(e) =>
                        setLines((prev) =>
                          prev.map((row) =>
                            row.key === line.key
                              ? { ...row, amount: e.target.value }
                              : row,
                          ),
                        )
                      }
                      aria-label={t('addRecipe.quantity')}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="shrink-0 self-end"
                    disabled={lines.length === 1}
                    onClick={() =>
                      setLines((prev) =>
                        prev.filter((row) => row.key !== line.key),
                      )
                    }
                    aria-label={t('addRecipe.removeLine')}
                  >
                    <Trash2Icon />
                  </Button>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setLines((prev) => [...prev, emptyLine()])}
            >
              <PlusIcon />
              {t('addRecipe.addIngredient')}
            </Button>
          </fieldset>

          {displayError && (
            <p className="text-sm text-destructive" role="alert">
              {displayError}
            </p>
          )}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isPending}
            >
              {t('common.cancel')}
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? t('common.saving') : t('addRecipe.create')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
