import React, { useMemo } from "react";
import { Table } from "components/layout";
import {
  HeaderGroup,
  Row,
  TableBodyProps,
  TableProps,
  TableToggleRowsSelectedProps,
} from "react-table";

function ModelTable<T extends object = {}>({
  title,
  withRowSelection,
  checkboxProps,
  tableProps,
  headerGroups,
  rows,
  tableBodyProps,
}: ModelTableProps<T>) {
  const showCheckboxes = useMemo(
    () =>
      checkboxProps && (checkboxProps.indeterminate || checkboxProps.checked),
    [checkboxProps]
  );

  return (
    <Table
      aria-label={title}
      withRowSelection={withRowSelection}
      showCheckboxes={showCheckboxes}
      {...tableProps}
    >
      <Table.Header
        withCheckbox={withRowSelection}
        checkboxProps={checkboxProps}
        headerGroups={headerGroups}
      />
      <Table.Body rows={rows} {...tableBodyProps} />
    </Table>
  );
}

export interface ModelTableProps<T extends object = {}> {
  title: string;
  withRowSelection?: boolean;
  checkboxProps?: TableToggleRowsSelectedProps;
  tableProps: TableProps;
  headerGroups: HeaderGroup<T>[];
  rows: Row<T>[];
  tableBodyProps: TableBodyProps;
}

export default ModelTable;
