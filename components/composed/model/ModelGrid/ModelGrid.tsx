import React, { useMemo } from "react";
import { Row, TableToggleRowsSelectedProps } from "react-table";
import Grid from "components/layout/Grid/Grid";
import ModelGridItem from "./ModelGridItem";

function ModelGrid<T extends object = {}>({ rows, checkboxProps }: Props<T>) {
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

interface Props<T extends object = {}> {
  rows: Row<T>[];
  checkboxProps?: TableToggleRowsSelectedProps;
}

export default ModelGrid;
