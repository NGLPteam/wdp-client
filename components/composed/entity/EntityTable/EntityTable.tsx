import React, { useEffect, useCallback } from "react";
import isFunction from "lodash/isFunction";
import { useTable, useRowSelect, useSortBy, Column } from "react-table";
import { Table } from "components/layout";
import useRowActions from "./plugins/useRowActions";
import mapSortBy from "./helpers/mapSortBy";

import { PageInfo } from "types/graphql-schema";

function EntityTable<
  T extends Record<string, unknown> = Record<string, unknown>
>({
  title,
  entities,
  columns,
  actions,
  onSort,
  onSelectionChange,
}: EntityTableProps<T>) {
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
      data: entities,
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

  return (
    <Table
      aria-label={title}
      withRowSelection={withRowSelection}
      showCheckboxes={
        checkboxProps && (checkboxProps.indeterminate || checkboxProps.checked)
      }
      {...getTableProps()}
    >
      <Table.Header
        withCheckbox={withRowSelection}
        checkboxProps={checkboxProps}
        headerGroups={headerGroups}
      />
      <Table.Body rows={rows} {...getTableBodyProps()} />
    </Table>
  );
}

export interface EntityTableActionProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: { original: T };
}

export interface EntityTableActionOptions<T> {
  handleClick?: (props: EntityTableActionProps<T>) => void;
  // TODO: Support a named route and params.
}

export interface EntityTableActions<T> {
  edit?: EntityTableActionOptions<T>;
  delete?: EntityTableActionOptions<T>;
}

export interface OnSortProps {
  order: string;
  id: string;
  desc: boolean;
}

export interface OnSelectionChangeProps {
  selectedRowIds: string[];
}

export interface EntityTableProps<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Column<any>[];
  title: string;
  pageInfo?: PageInfo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entities?: ReadonlyArray<any>;
  actions?: EntityTableActions<T>;
  onSort?: (props: OnSortProps) => void;
  onSelectionChange?: (props: OnSelectionChangeProps) => void;
}

export default EntityTable;
