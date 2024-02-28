import { useState, useEffect, useMemo } from "react";
import { useQueryVariablesContext } from "@wdp/lib/api/hooks";
import { useRouter } from "next/router";
import { mapSortBy, reverseMapSortBy } from "../helpers/mapSortBy";
import type { ColumnSort, SortingState } from "@tanstack/react-table";

export default function useTableSorting() {
  const router = useRouter();

  const { setQueryVariables, queryVariables } = useQueryVariablesContext();

  const initialSortBy = useMemo(() => {
    const order =
      queryVariables && queryVariables.order
        ? reverseMapSortBy(queryVariables.order)
        : undefined;

    return order ? ([order] as ColumnSort[]) : [];
  }, [queryVariables]);

  const [sorting, setSorting] = useState<SortingState>(initialSortBy);

  useEffect(() => {
    if (!setQueryVariables || !queryVariables) return;

    let order = null;

    if (sorting[0]) {
      const { id, desc } = sorting[0];

      order = mapSortBy(id, desc);
    }

    setQueryVariables({ ...queryVariables, order: order || undefined });

    // Quietly update query vars
    if (order !== router.query.order) {
      router.push(
        { query: { ...router.query, order: order || undefined } },
        undefined,
        {
          shallow: true,
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  return [sorting, setSorting];
}
