import { Table } from "components/layout";
import { useQueryStateContext } from "hooks";
import type { HeaderGroup, Row } from "@tanstack/react-table";

type ModelTableProps<U extends Record<string, unknown>> = {
  title: string;
  selectable: boolean;
  someRowsSelected?: boolean;
  allRowsSelected?: boolean;
  toggleAllRowsSelectedHandler?: (event: unknown) => void;
  listId?: string;
  headerGroups: HeaderGroup<U>[];
  rows: Row<U>[];
};

function ModelTable<U extends Record<string, unknown>>({
  title,
  selectable,
  headerGroups,
  rows,
  listId,
  someRowsSelected,
  allRowsSelected,
  toggleAllRowsSelectedHandler,
}: ModelTableProps<U>) {
  const queryState = useQueryStateContext();

  return (
    <Table
      id={listId}
      aria-label={title}
      selectable={selectable}
      showCheckboxes={someRowsSelected || allRowsSelected}
    >
      {queryState.completed && (
        <Table.Header<U>
          {...{
            selectable,
            headerGroups,
            someRowsSelected,
            allRowsSelected,
            toggleAllRowsSelectedHandler,
          }}
        />
      )}
      <Table.Body loading={queryState.loading} rows={rows} />
    </Table>
  );
}

export default ModelTable;
