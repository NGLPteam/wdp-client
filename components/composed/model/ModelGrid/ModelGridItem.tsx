import React, { useMemo } from "react";
import { Row } from "react-table";
import Grid from "components/layout/Grid/Grid";
// import { DataViewOptions } from "components/atomic/DataViewToggle";

function ModelGridItem<
  T extends Record<string, unknown> = Record<string, unknown>
>({ row }: Props<T>) {
  const actions = useMemo(
    () => row.cells.find((cell) => cell.column.id === "actions"),
    [row]
  );

  const thumbnail = useMemo(
    () => row.cells.find((cell) => cell.column.id === "thumbnail"),
    [row]
  );

  return (
    <Grid.Item
      checkboxProps={row.getToggleRowSelectedProps()}
      actions={actions && actions.render("Cell")}
      thumbnail={thumbnail && thumbnail.render("GridCell")}
    >
      <>
        {row.cells.map((cell, i) => {
          if (cell.column.id === "actions" || cell.column.id === "thumbnail")
            return;

          return (
            <div
              key={i}
              className={
                cell.column.id === "title"
                  ? "t-weight-md a-link"
                  : "t-copy-sm a-color-light"
              }
            >
              {cell.column.id !== "title" && (
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

interface Props<T extends Record<string, unknown> = Record<string, unknown>> {
  row: Row<T>;
}

export default ModelGridItem;
