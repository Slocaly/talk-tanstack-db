import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ListPaginationBarProps = {
  page: number
  totalPages: number
  totalItems: number
  pageSize: number
  onPageChange: (page: number) => void
  className?: string
}

export function ListPaginationBar({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  className,
}: ListPaginationBarProps) {
  if (totalPages <= 1) return null

  const from = totalItems === 0 ? 0 : (page - 1) * pageSize + 1
  const to = Math.min(page * pageSize, totalItems)

  return (
    <div
      className={cn(
        'flex flex-col gap-3 border-t-2 border-border pt-4 sm:flex-row sm:items-center sm:justify-between',
        className
      )}
    >
      <p className="text-sm text-muted-foreground">
        {totalItems === 0
          ? 'Aucun élément'
          : `${from}–${to} sur ${totalItems} · page ${page} / ${totalPages}`}
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Précédent
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Suivant
        </Button>
      </div>
    </div>
  )
}
