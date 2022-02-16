import React, { useCallback, useMemo, useEffect } from "react";
import { useTable, useSortBy, useRowSelect } from "react-table";
import type { Column, ModelTableActionProps } from "react-table";
import type { OperationType } from "relay-runtime";
import { useRouter } from "next/router";
import { mapSortBy, reverseMapSortBy } from "../helpers/mapSortBy";
import { toEntities } from "../helpers/toEntities";
import useRowActions from "./useRowActions";
import { useNoInitialEffect, useRoutePage } from "hooks";
import { PaginatedConnectionish } from "components/composed/model/ModelListPage";
import { Connectionish } from "types/graphql-helpers";

interface Actions<T extends Record<string, unknown>> {
  handleEdit?: (props: ModelTableActionProps<T>) => void;
  handleDelete?: (props: ModelTableActionProps<T>) => void;
  handleDownload?: (props: ModelTableActionProps<T>) => void;
  handleView?: (props: ModelTableActionProps<T>) => void;
}

export interface UseModelListProps<
  T extends OperationType,
  U extends PaginatedConnectionish | Connectionish,
  V extends Record<string, unknown>
> {
  data?: U | null;
  columns: Column<V>[];
  actions?: Actions<V>;
  selectable?: boolean;
  queryVariables?: T["variables"];
  setQueryVariables?: React.Dispatch<React.SetStateAction<T["variables"]>>;
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
  queryVariables,
  setQueryVariables,
  disableSortBy,
}: UseModelListProps<T, U, V>) {
  // Extract entities from the connectionish data
  const entities = useMemo(() => toEntities<U, V>(data), [data]);

  // Setup table hooks
  const tableHooks = [useSortBy, useRowActions];
  if (selectable) tableHooks.push(useRowSelect);

  // Setup callbacks
  // If no slug exists, use the model's id
  const getRowId = useCallback((row) => {
    return row?.slug || row?.id;
  }, []);

  // Setup initial order
  const order =
    queryVariables && queryVariables.order
      ? reverseMapSortBy(queryVariables.order)
      : undefined;
  const initialSortBy = order ? [order] : [];

  // Build initial table state
  const initialState = { selection: {}, sortBy: initialSortBy };

  // Setup actions
  const rowActions = useMemo(
    () => ({
      ...(actions.handleEdit && { edit: { handleClick: actions.handleEdit } }),
      ...(actions.handleDelete && {
        delete: { handleClick: actions.handleDelete, modalConfirm: true },
      }),
      ...(actions.handleDownload && {
        download: { handleLink: actions.handleDownload },
      }),
      ...(actions.handleView && {
        view: { handleLink: actions.handleView },
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
      disableSortBy,
    },
    ...tableHooks
  );

  // Respond to route page query variable changes.
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
  const router = useRouter();
  useEffect(() => {
    if (!setQueryVariables || !queryVariables) return;
    if (!Array.isArray(sortBy) || sortBy.length === 0) return;
    const { id, desc } = sortBy[0];
    const order = mapSortBy(id, desc);
    if (!order) return;

    setQueryVariables({ ...queryVariables, order });
    // Quietly update query vars
    router.push({ query: { ...router.query, order } }, undefined, {
      shallow: true,
    });
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
