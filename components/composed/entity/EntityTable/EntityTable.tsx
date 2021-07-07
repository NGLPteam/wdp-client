import React, { useEffect, useCallback } from "react";
import isFunction from "lodash/isFunction";
import { useTable, useRowSelect, useSortBy } from "react-table";
import { Table } from "components/layout";
import useColumnInject from "./plugins/useColumnInject";
import useRowActions from "./plugins/useRowActions";
import mapSortBy from "./helpers/mapSortBy";
import { ColumnOptions } from "types/react-table";
import { PageInfo } from "types/common";

const EntityTable = ({
  entities,
  columns,
  actions,
  withUpdatedAt,
  withCreatedAt,
  withRowSelection,
  onSort,
  onSelectionChange,
}: EntityTableProps) => {
  const tableHooks = [
    useSortBy,
    useColumnInject,
    withRowSelection && useRowSelect,
    useRowActions,
  ].filter((n) => n);

  const injectColumns = [
    withUpdatedAt && "updatedAt",
    withCreatedAt && "createdAt",
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
  } = useTable(
    {
      columns,
      data: entities,
      manualSortBy: true,
      getRowId,
      disableMultiSort: true,
      actions,
      injectColumns,
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

  const checkboxProps = getToggleAllRowsSelectedProps();

  return (
    <Table
      withRowSelection={withRowSelection}
      showCheckboxes={checkboxProps.indeterminate || checkboxProps.checked}
      rows={rows}
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
};

export interface EntityTableActionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
}

export interface EntityTableActionOptions {
  handleClick?: (props: EntityTableActionProps) => void;
  // TODO: Support a named route and params.
}

export interface EntityTableActions {
  edit?: EntityTableActionOptions;
  delete?: EntityTableActionOptions;
}

export interface OnSortProps {
  order: string;
  id: string;
  desc: boolean;
}

export interface OnSelectionChangeProps {
  selectedRowIds: string[];
}

export interface EntityTableProps {
  columns: ColumnOptions[];
  pageInfo?: PageInfo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entities?: ReadonlyArray<any>;
  withUpdatedAt?: boolean;
  withCreatedAt?: boolean;
  actions?: EntityTableActions;
  onSort?: (props: OnSortProps) => void;
  onSelectionChange?: (props: OnSelectionChangeProps) => void;
  withRowSelection?: boolean;
}

export default EntityTable;
