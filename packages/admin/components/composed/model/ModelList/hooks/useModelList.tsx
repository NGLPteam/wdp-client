import { useCallback, useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { OperationType } from "relay-runtime";
import { toEntities } from "../helpers/toEntities";
import useTableSorting from "./useTableSorting";
import useRowActions, { Actions } from "./useRowActions";
import { PaginatedConnectionish } from "components/composed/model/ModelListPage";
import { Connectionish } from "types/graphql-helpers";

export interface UseModelListProps<
  T extends OperationType,
  U extends PaginatedConnectionish | Connectionish,
  V extends Record<string, unknown>
> {
  data?: U | null;
  columns: ColumnDef<V>[];
  actions?: Actions<V>;
  selectable?: boolean;
  /** Disable sorting on all columns */
  disableSortBy?: boolean;
}

function useModelList<
  T extends OperationType,
  U extends PaginatedConnectionish | Connectionish,
  V extends Record<string, unknown>
>({
  data,
  columns,
  actions = {},
  selectable = false,
  disableSortBy,
}: UseModelListProps<T, U, V>) {
  // Extract entities from the connectionish data
  const entities = useMemo(() => toEntities<U, V>(data), [data]);

  // Set the row's id to either the slug or item id
  const getRowId = useCallback((orignalRow) => {
    return orignalRow?.slug || orignalRow?.id;
  }, []);

  // Setup sorting
  const [sorting, setSorting] = useTableSorting();

  // Get the columns with actions
  const allColumns = useRowActions(columns, actions);

  const table = useReactTable<V>({
    data: entities,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    // getSortedRowModel: getSortedRowModel(),
    // manualSortBy: true,
    getRowId,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    enableMultisort: false,
    enableSorting: !disableSortBy,
  });

  // Respond to route page query variable changes.
  /* eslint-disable react-hooks/exhaustive-deps */
  // const routePage = useRoutePage();
  // useEffect(() => {
  //   if (!setQueryVariables || !queryVariables) return;
  //   if (routePage === queryVariables.page) return;
  //   setQueryVariables({ ...queryVariables, page: routePage });
  // }, [routePage]);
  /* eslint-enable react-hooks/exhaustive-deps */

  // Respond to selection changes.
  /* eslint-disable no-console */
  // useNoInitialEffect(() => {
  //   console.log("Selection changed: ");
  //   console.log(selection);
  // }, [selection]);
  /* eslint-enable no-console */

  // Prepare rows
  const rows = table.getCoreRowModel().rows;

  // Prepare header groups
  const headerGroups = table.getHeaderGroups();

  // Is there a selection?
  // const hasSelection = useMemo(() => {
  //   return (selection && Object.keys(selection).length > 0) || false;
  // }, [selection]);

  // Return props for tables or grids as well as any extras.
  return {
    selection: [],
    modelGridOrTableProps: {
      headerGroups,
      rows,
      hasSelection: false,
    },
  };
}

export default useModelList;
