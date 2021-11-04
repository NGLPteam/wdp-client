import React from "react";
import type {
  UseTableInstanceProps,
  UseRowSelectInstanceProps,
} from "react-table";
import { Table } from "components/layout";
import { useQueryStateContext } from "hooks";

type ModelTableProps<U extends Record<string, unknown>> = Pick<
  UseTableInstanceProps<U>,
  "headerGroups" | "getTableBodyProps" | "rows" | "getTableProps"
> &
  Partial<
    Pick<UseRowSelectInstanceProps<U>, "getToggleAllRowsSelectedProps">
  > & {
    title: string;
    selectable: boolean;
    hasSelection: boolean;
    listId?: string;
  };

function ModelTable<U extends Record<string, unknown>>({
  title,
  selectable,
  hasSelection,
  headerGroups,
  getToggleAllRowsSelectedProps,
  getTableBodyProps,
  getTableProps,
  rows,
  listId,
}: ModelTableProps<U>) {
  const queryState = useQueryStateContext();
  const checkboxProps =
    getToggleAllRowsSelectedProps && getToggleAllRowsSelectedProps();

  return (
    <Table
      id={listId}
      aria-label={title}
      withRowSelection={selectable}
      showCheckboxes={hasSelection}
      {...getTableProps()}
    >
      <Table.Header<U>
        withCheckbox={selectable}
        checkboxProps={checkboxProps}
        headerGroups={headerGroups}
      />
      <Table.Body
        loading={!queryState.completed}
        rows={rows}
        {...getTableBodyProps()}
      />
    </Table>
  );
}

export default ModelTable;
