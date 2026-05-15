import { Skeleton } from '@/components/ui/skeleton';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';

type IngredientsTableSkeletonProps = {
  rows: number;
};

export function IngredientsTableSkeleton({
  rows,
}: IngredientsTableSkeletonProps) {
  const n = Math.min(Math.max(1, rows), 24);
  return (
    <TableBody aria-busy="true" aria-label="Chargement des ingrédients">
      {Array.from({ length: n }, (_, i) => (
        <TableRow key={i}>
          <TableCell>
            <Skeleton className="h-5 w-36" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-28" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-24" />
          </TableCell>
          <TableCell className="text-right">
            <Skeleton className="ml-auto h-8 w-18" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
