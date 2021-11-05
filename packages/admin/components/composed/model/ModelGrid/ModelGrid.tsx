import React from "react";
import type {
  UseTableInstanceProps,
  UseRowSelectInstanceProps,
} from "react-table";
import ModelGridItem from "./ModelGridItem";
import Grid from "components/layout/Grid/Grid";
import { useQueryStateContext } from "hooks";

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
  selectable,
  hasSelection,
  listId,
}: ModelGridProps<U>) {
  const { loading } = useQueryStateContext();

  return (
    <Grid showCheckboxes={hasSelection} id={listId} loading={loading}>
      <>
        {rows.map((row, i) => (
          <ModelGridItem key={i} row={row} selectable={selectable} />
        ))}
      </>
    </Grid>
  );
}

export default ModelGrid;
