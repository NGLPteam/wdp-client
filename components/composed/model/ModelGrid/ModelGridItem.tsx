import React, { useMemo } from "react";
import { Row } from "react-table";
import Grid from "components/layout/Grid/Grid";

function ModelGridItem<T extends Record<string, unknown>>({ row }: Props<T>) {
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
      thumbnail={thumbnail && thumbnail.render("Cell", { grid: true })}
    >
      <>
        {row.cells.map((cell, i) => {
          if (
            cell.column.id.toLowerCase() === "actions" ||
            cell.column.id.toLowerCase() === "thumbnail"
          )
            return;

          return (
            <div key={i}>
              {cell.column.id.toLowerCase() !== "title" &&
                cell.column.id.toLowerCase() !== "name" && (
                  <span>
                    {cell.render("Header")}
                    {`: `}
                  </span>
                )}
              {cell.render("Cell")}
            </div>
          );
        })}
      </>
    </Grid.Item>
  );
}

interface Props<T extends Record<string, unknown>> {
  row: Row<T>;
}

export default ModelGridItem;
