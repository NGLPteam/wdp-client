import Grid from "components/layout/Grid/Grid";
import { useQueryStateContext } from "hooks";
import ModelGridItem from "./ModelGridItem";
import type { Row } from "@tanstack/react-table";

type ModelGridProps<U extends Record<string, unknown>> = {
  rows: Row<U>[];
  title?: string;
  selectable?: boolean;
  someRowsSelected?: boolean;
  allRowsSelected?: boolean;
  listId?: string;
};

function ModelGrid<U extends Record<string, unknown>>({
  rows,
  selectable,
  someRowsSelected,
  allRowsSelected,
  listId,
}: ModelGridProps<U>) {
  const { loading } = useQueryStateContext();

  return (
    <Grid
      showCheckboxes={selectable && (someRowsSelected || allRowsSelected)}
      id={listId}
      loading={loading}
    >
      <>
        {rows.map((row, i) => (
          <ModelGridItem key={i} row={row} />
        ))}
      </>
    </Grid>
  );
}

export default ModelGrid;
