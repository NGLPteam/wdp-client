import React, { useMemo } from "react";
import { Row } from "react-table";
import Grid from "components/layout/Grid/Grid";
// import { DataViewOptions } from "components/atomic/DataViewToggle";

function ModelGridItem<T extends object = {}>({ row }: Props<T>) {
  const actions = useMemo(
    () => row.cells.find((cell) => cell.column.id === "actions"),
    [row]
  );

  const thumbnail = useMemo(
    () => row.cells.find((cell) => cell.column.id === "thumbnail"),
    [row]
  );

  const checkboxProps = row.getToggleRowSelectedProps
    ? row.getToggleRowSelectedProps()
    : undefined;

  return (
    <Grid.Item
      checkboxProps={checkboxProps}
      actions={actions && actions.render("Cell")}
      thumbnail={thumbnail && thumbnail.render("GridCell")}
    >
      <>
        {row.cells.map((cell, i) => {
          if (cell.column.id === "actions" || cell.column.id === "thumbnail")
            return;

          return (
            <div key={i}>
              {cell.column.id !== "title" && cell.column.id !== "name" && (
                <span>{`${cell.render("Header")}: `}</span>
              )}
              {cell.render("Cell")}
            </div>
          );
        })}
      </>
    </Grid.Item>
  );
}

interface Props<T extends object = {}> {
  row: Row<T>;
}

export default ModelGridItem;
