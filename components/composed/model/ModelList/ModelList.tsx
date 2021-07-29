import React, { useEffect, useCallback } from "react";
import isFunction from "lodash/isFunction";
import {
  useTable,
  useRowSelect,
  useSortBy,
  ModelTableActions,
  Column,
  TableToggleRowsSelectedProps,
  TableProps,
  HeaderGroup,
  Row,
  TableBodyProps,
} from "react-table";
import ModelTable from "../ModelTable";
import ModelGrid from "../ModelGrid";
import useRowActions from "../plugins/useRowActions";
import mapSortBy from "../helpers/mapSortBy";

import { PageInfo } from "types/graphql-schema";
import { DataViewOptions } from "components/atomic/DataViewToggle";

export interface OnSortProps {
  order: string;
  id: string;
  desc: boolean;
}

export interface OnSelectionChangeProps {
  selectedRowIds: string[];
}

export interface ModelTableGridProps<T extends Record<string, unknown>> {
  title: string;
  withRowSelection?: boolean;
  checkboxProps?: TableToggleRowsSelectedProps;
  tableProps: TableProps;
  headerGroups: HeaderGroup<T>[];
  rows: Row<T>[];
  tableBodyProps: TableBodyProps;
}

export interface ModelListProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  title: string;
  pageInfo?: PageInfo;
  models?: ReadonlyArray<T>;
  actions?: ModelTableActions<T>;
  onSort?: (props: OnSortProps) => void;
  onSelectionChange?: (props: OnSelectionChangeProps) => void;
  selectedView: DataViewOptions;
}

function ModelList<T extends Record<string, unknown>>({
  title,
  models,
  columns,
  actions,
  onSort,
  onSelectionChange,
  selectedView,
}: ModelListProps<T>) {
  const withRowSelection = isFunction(onSelectionChange);

  const tableHooks = [useSortBy, useRowActions];
  if (withRowSelection) tableHooks.push(useRowSelect);

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
      data: models || [],
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
      if (order) onSort({ id, desc, order });
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

  return selectedView === DataViewOptions.table ? (
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
    <ModelGrid
      withRowSelection={withRowSelection}
      rows={rows}
      checkboxProps={checkboxProps}
    />
  );
}

export default ModelList;
