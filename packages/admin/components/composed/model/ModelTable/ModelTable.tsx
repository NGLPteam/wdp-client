import type { HeaderGroup, Row } from "@tanstack/react-table";
import { Table } from "components/layout";
import { useQueryStateContext } from "hooks";

type ModelTableProps<U extends Record<string, unknown>> = {
  title: string;
  selectable: boolean;
  hasSelection: boolean;
  listId?: string;
  headerGroups: HeaderGroup<U>[];
  rows: Row<U>[];
};

function ModelTable<U extends Record<string, unknown>>({
  title,
  selectable,
  hasSelection,
  headerGroups,
  rows,
  listId,
}: ModelTableProps<U>) {
  const queryState = useQueryStateContext();

  return (
    <Table
      id={listId}
      aria-label={title}
      withRowSelection={selectable}
      showCheckboxes={hasSelection}
    >
      {queryState.completed && (
        <Table.Header<U>
          withCheckbox={selectable}
          // checkboxProps={checkboxProps}
          headerGroups={headerGroups}
        />
      )}
      <Table.Body loading={!queryState.completed} rows={rows} />
    </Table>
  );
}

export default ModelTable;
