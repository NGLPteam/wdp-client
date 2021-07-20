import React, { useEffect, useCallback } from "react";
import isFunction from "lodash/isFunction";
import { useTable, useRowSelect, useSortBy, Column } from "react-table";
import ModelTable from "../ModelTable";
import ModelGrid from "../ModelGrid";
import useRowActions from "../plugins/useRowActions";
import mapSortBy from "../helpers/mapSortBy";

import { PageInfo } from "types/graphql-schema";

function ModelData<
  T extends Record<string, unknown> = Record<string, unknown>
>({
  title,
  models,
  columns,
  actions,
  onSort,
  onSelectionChange,
  selectedView,
}: ModelTableProps<T>) {
  const withRowSelection = isFunction(onSelectionChange);

  const tableHooks = [
    useSortBy,
    withRowSelection && useRowSelect,
    useRowActions,
  ].filter((n) => n);

  const getRowId = useCallback((row) => {
    return row.slug;
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds, sortBy },
    getToggleAllRowsSelectedProps,
  } = useTable<T>(
    {
      columns,
      data: models,
      manualSortBy: true,
      getRowId,
      disableMultiSort: true,
      actions,
    },
    ...tableHooks
  );

  const handleSort = useCallback(
    (sortBy) => {
      if (!isFunction(onSort)) return;
      if (!Array.isArray(sortBy) || sortBy.length === 0) return;
      const { id, desc } = sortBy[0];
      const order = mapSortBy(id, desc);
      onSort({ id, desc, order });
    },
    [onSort]
  );

  const handleSelectionChange = useCallback(
    (selectedRowIds) => {
      if (!isFunction(onSelectionChange)) return;
      onSelectionChange({ selectedRowIds });
    },
    [onSelectionChange]
  );

  useEffect(() => {
    handleSort(sortBy);
  }, [handleSort, sortBy]);

  useEffect(() => {
    handleSelectionChange(selectedRowIds);
  }, [handleSelectionChange, selectedRowIds]);

  // Prepare rows
  rows.forEach((row) => prepareRow(row));

  const checkboxProps =
    getToggleAllRowsSelectedProps && getToggleAllRowsSelectedProps();

  return selectedView === "table" ? (
    <ModelTable
      title={title}
      withRowSelection={withRowSelection}
      checkboxProps={checkboxProps}
      tableProps={getTableProps()}
      headerGroups={headerGroups}
      rows={rows}
      tableBodyProps={getTableBodyProps()}
    />
  ) : (
    <ModelGrid rows={rows} />
  );
}

export interface ModelTableActionProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: { original: T };
}

export interface ModelTableActionOptions<T> {
  handleClick?: (props: ModelTableActionProps<T>) => void;
  // TODO: Support a named route and params.
}

export interface ModelTableActions<T> {
  edit?: ModelTableActionOptions<T>;
  delete?: ModelTableActionOptions<T>;
}

export interface OnSortProps {
  order: string;
  id: string;
  desc: boolean;
}

export interface OnSelectionChangeProps {
  selectedRowIds: string[];
}

export interface ModelTableProps<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Column<any>[];
  title: string;
  pageInfo?: PageInfo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  models?: ReadonlyArray<any>;
  actions?: ModelTableActions<T>;
  onSort?: (props: OnSortProps) => void;
  onSelectionChange?: (props: OnSelectionChangeProps) => void;
  selectedView: "table" | "grid" | string;
}

export default ModelData;
