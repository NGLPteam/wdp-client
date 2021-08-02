import React, { useMemo } from "react";
import { Row, TableToggleRowsSelectedProps } from "react-table";
import Grid from "components/layout/Grid/Grid";
import ModelGridItem from "./ModelGridItem";

function ModelGrid<
  T extends Record<string, unknown> = Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>({ rows, checkboxProps }: Props<T>) {
  const showCheckboxes = useMemo(
    () =>
      checkboxProps && (checkboxProps.indeterminate || checkboxProps.checked),
    [checkboxProps]
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

interface Props<T extends Record<string, unknown> = Record<string, unknown>> {
  rows: Row<T>[];
  checkboxProps?: TableToggleRowsSelectedProps;
}

export default ModelGrid;
