import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type ListPaginationBarProps = {
  page: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
  /** When true, navigation buttons are disabled (e.g. while a page is loading). */
  disabled?: boolean;
  /** When true, shows a loading summary and spinners; navigation is disabled. */
  isLoading?: boolean;
};

export function ListPaginationBar({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  className,
  disabled = false,
  isLoading = false,
}: ListPaginationBarProps) {
  const from = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalItems);
  const navDisabled = disabled || isLoading;

  return (
    <div
      className={cn(
        'flex flex-col gap-3 border-t-2 border-border pt-4 sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
      aria-busy={isLoading || undefined}
    >
      {isLoading ? (
        <Skeleton className="h-4 w-52 sm:w-64" aria-hidden />
      ) : (
        <p className="text-sm text-muted-foreground">
          {totalItems === 0
            ? 'Aucun élément'
            : `${from}–${to} sur ${totalItems} · page ${page} / ${totalPages}`}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          disabled={navDisabled || page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Précédent
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          disabled={navDisabled || page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}
