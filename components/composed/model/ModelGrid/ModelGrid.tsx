import React, { useMemo } from "react";
import Grid from "components/layout/Grid/Grid";
import ModelGridItem from "./ModelGridItem";
import { ModelTableGridProps } from "components/composed/model/ModelList";

function ModelGrid<T extends Record<string, unknown>>({
  rows,
  checkboxProps,
  withRowSelection,
}: Pick<
  ModelTableGridProps<T>,
  "rows" | "checkboxProps" | "withRowSelection"
>) {
  const showCheckboxes = useMemo(
    () =>
      withRowSelection &&
      checkboxProps &&
      (checkboxProps.indeterminate || checkboxProps.checked),
    [withRowSelection, checkboxProps]
  );

  return (
    <Grid showCheckboxes={showCheckboxes}>
      <>
        {rows.map((row, i) => (
          <ModelGridItem key={i} row={row} />
        ))}
      </>
    </Grid>
  );
}

export default ModelGrid;
