import React, { useEffect, useCallback } from "react";
import startCase from "lodash/startCase";
import isFunction from "lodash/isFunction";
import { useTable, useRowSelect, useSortBy } from "react-table";
import { PageHeader, Table } from "components/layout";
import { Pagination } from "components/atomic";
import useColumnInject from "./plugins/useColumnInject";
import useRowActions from "./plugins/useRowActions";
import mapSortBy from "./helpers/mapSortBy";
import { useTranslation } from "react-i18next";
import { ColumnOptions } from "types/react-table";
import { PageInfo } from "types/common";

const EntityTableLoaded = ({
  entityName,
  entities,
  pageInfo,
  columns,
  actions,
  withUpdatedAt,
  withCreatedAt,
  withRowSelection,
  onSort,
  onSelectionChange,
}: EntityTableLoadedProps) => {
  const { t } = useTranslation("glossary");
  const title = t(entityName, { count: 2 });

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

  return (
    <section>
      {title && <PageHeader title={startCase(title)} />}
      {pageInfo && (
        <span>{`showing ${(pageInfo.page - 1) * pageInfo.perPage + 1} to ${
          pageInfo.page * pageInfo.perPage
        } of ${pageInfo.totalCount}`}</span>
      )}
      <Table
        withRowSelection={withRowSelection}
        rows={rows}
        {...getTableProps()}
      >
        <Table.Header
          withCheckbox={withRowSelection}
          checkboxProps={getToggleAllRowsSelectedProps()}
          headerGroups={headerGroups}
        />
        <Table.Body rows={rows} {...getTableBodyProps()} />
      </Table>
      {pageInfo && (
        <Pagination
          currentPage={pageInfo.page}
          totalPages={pageInfo.pageCount}
        />
      )}
    </section>
  );
};

interface EntityTableActionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
}

interface EntityTableActionOptions {
  handleClick?: (props: EntityTableActionProps) => void;
  // TODO: Support a named route and params.
}

interface EntityTableActions {
  edit?: EntityTableActionOptions;
  delete?: EntityTableActionOptions;
}

interface OnSortProps {
  order: string;
  id: string;
  desc: boolean;
}

interface OnSelectionChangeProps {
  selectedRowIds: string[];
}

export interface EntityTableLoadedProps {
  columns: ColumnOptions[];
  pageInfo?: PageInfo;
  entityName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entities?: ReadonlyArray<any>;
  withUpdatedAt?: boolean;
  withCreatedAt?: boolean;
  actions?: EntityTableActions;
  onSort?: (props: OnSortProps) => void;
  onSelectionChange?: (props: OnSelectionChangeProps) => void;
  withRowSelection?: boolean;
}

export default EntityTableLoaded;
