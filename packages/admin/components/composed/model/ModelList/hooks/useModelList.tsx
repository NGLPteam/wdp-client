import { useCallback, useMemo } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { PaginatedConnectionish } from "components/composed/model/ModelListPage";
import { Connectionish } from "types/graphql-helpers";
import { toEntities } from "../helpers/toEntities";
import useTableSorting from "./useTableSorting";
import useRowActions, { Actions } from "./useRowActions";
import useTableRowSelection from "./useTableRowSelection";
import type { OperationType } from "relay-runtime";
import type { ColumnDef } from "@tanstack/react-table";

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface UseModelListProps<
  T extends OperationType,
  U extends PaginatedConnectionish | Connectionish,
  V extends Record<string, unknown>,
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
  V extends Record<string, unknown>,
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
  const getRowId = useCallback((orignalRow: V) => {
    return orignalRow?.slug || orignalRow?.id;
  }, []);

  // Set up sorting
  const [sorting, setSorting] = useTableSorting();

  // Set up row selection
  const [rowSelection, setRowSelection] = useTableRowSelection();

  // Get the columns with actions
  const allColumns = useRowActions(columns, actions);

  const table = useReactTable<V>({
    data: entities,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    getRowId,
    state: {
      sorting,
      rowSelection,
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    enableMultisort: false,
    enableSorting: !disableSortBy,
    enableRowSelection: selectable,
    enableMultiRowSelection: selectable,
  });

  // Prepare rows
  const rows = table.getCoreRowModel().rows;

  // Prepare header groups
  const headerGroups = table.getHeaderGroups();

  // Return props for tables or grids as well as any extras.
  return {
    modelGridOrTableProps: {
      headerGroups,
      rows,
      someRowsSelected: table.getIsSomeRowsSelected(),
      allRowsSelected: table.getIsAllRowsSelected(),
      toggleAllRowsSelectedHandler: table.getToggleAllPageRowsSelectedHandler(),
    },
  };
}

export default useModelList;
