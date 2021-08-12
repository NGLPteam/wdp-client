import React, { useCallback, useMemo, useEffect } from "react";
import { PaginatedConnectionish } from "components/composed/model/ModelListPage";
import { useTable, useSortBy, useRowSelect } from "react-table";
import useRowActions from "./useRowActions";
import type { Column, ModelTableActionProps } from "react-table";
import { useNoInitialEffect, useRoutePage } from "hooks";
import type { OperationType } from "relay-runtime";
import { mapSortBy, reverseMapSortBy } from "../helpers/mapSortBy";
import { toEntities } from "../helpers/toEntities";

interface Actions<T extends Record<string, unknown>> {
  handleEdit?: (props: ModelTableActionProps<T>) => void;
  handleDelete?: (props: ModelTableActionProps<T>) => void;
}

export interface UseModelListProps<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown>
> {
  data: U;
  columns: Column<V>[];
  actions?: Actions<V>;
  selectable?: boolean;
  queryVariables?: T["variables"];
  setQueryVariables?: React.Dispatch<React.SetStateAction<T["variables"]>>;
}

function useModelList<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown>
>({
  data,
  columns,
  actions = {},
  selectable = false,
  queryVariables,
  setQueryVariables,
}: UseModelListProps<T, U, V>) {
  // Extract entities from the connectionish data
  const entities = useMemo(() => toEntities<U, V>(data), [data]);

  // Setup table hooks
  const tableHooks = [useSortBy, useRowActions];
  if (selectable) tableHooks.push(useRowSelect);

  // Setup callbacks
  const getRowId = useCallback((row) => {
    return row?.slug;
  }, []);

  // Setup initial order
  const order =
    queryVariables && queryVariables.order
      ? reverseMapSortBy(queryVariables.order)
      : undefined;
  const initialSortBy = order ? [order] : [];

  // Build initial table state
  const initialState = { sortBy: initialSortBy };

  // Setup actions
  const rowActions = useMemo(
    () => ({
      ...(actions.handleEdit && { edit: { handleClick: actions.handleEdit } }),
      ...(actions.handleDelete && {
        delete: { handleClick: actions.handleDelete },
      }),
    }),
    [actions]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds: selection, sortBy },
    getToggleAllRowsSelectedProps,
  } = useTable<V>(
    {
      columns,
      data: entities,
      manualSortBy: true,
      getRowId,
      disableMultiSort: true,
      initialState,
      actions: rowActions,
    },
    ...tableHooks
  );

  // Respond route page query variable changes.
  /* eslint-disable react-hooks/exhaustive-deps */
  const routePage = useRoutePage();
  useEffect(() => {
    if (!setQueryVariables || !queryVariables) return;
    if (routePage === queryVariables.page) return;
    setQueryVariables({ ...queryVariables, page: routePage });
  }, [routePage]);
  /* eslint-enable react-hooks/exhaustive-deps */

  // Respond to sortBy changes.
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!setQueryVariables || !queryVariables) return;
    if (!Array.isArray(sortBy) || sortBy.length === 0) return;
    const { id, desc } = sortBy[0];
    const order = mapSortBy(id, desc);
    if (!order) return;
    setQueryVariables({ ...queryVariables, order });
  }, [sortBy]);
  /* eslint-enable react-hooks/exhaustive-deps */

  // Respond to selection changes.
  /* eslint-disable no-console */
  useNoInitialEffect(() => {
    console.log("Selection changed: ");
    console.log(selection);
  }, [selection]);
  /* eslint-enable no-console */

  // Prepare rows
  rows.forEach((row) => prepareRow(row));

  // Is there a selection?
  const hasSelection = useMemo(() => {
    return (selection && Object.keys(selection).length > 0) || false;
  }, [selection]);

  // Return props for tables or grids as well as any extras.
  return {
    selection,
    modelGridOrTableProps: {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      getToggleAllRowsSelectedProps,
      hasSelection,
    },
  };
}

export default useModelList;
