import React from "react";
import Grid from "components/layout/Grid/Grid";
import type {
  UseTableInstanceProps,
  UseRowSelectInstanceProps,
} from "react-table";
import ModelGridItem from "./ModelGridItem";

type ModelGridProps<U extends Record<string, unknown>> = Pick<
  UseTableInstanceProps<U>,
  "rows"
> &
  Partial<
    Pick<UseRowSelectInstanceProps<U>, "getToggleAllRowsSelectedProps">
  > & {
    title?: string;
    selectable: boolean;
    hasSelection: boolean;
    listId?: string;
  };

function ModelGrid<U extends Record<string, unknown>>({
  rows,
  hasSelection,
  listId,
}: ModelGridProps<U>) {
  return (
    <Grid showCheckboxes={hasSelection} id={listId}>
      <>
        {rows.map((row, i) => (
          <ModelGridItem key={i} row={row} />
        ))}
      </>
    </Grid>
  );
}

export default ModelGrid;
