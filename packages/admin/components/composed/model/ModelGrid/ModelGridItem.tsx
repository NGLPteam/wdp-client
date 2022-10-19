import React, { useMemo } from "react";
import type { Cell, Row } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import Grid from "components/layout/Grid/Grid";

function ModelGridItem<T extends Record<string, unknown>>({
  row,
  selectable,
}: Props<T>) {
  const actions = useMemo(
    () => row.getVisibleCells().find((cell) => cell.column.id === "actions"),
    [row]
  );

  const thumbnail = useMemo(
    () => row.getVisibleCells().find((cell) => cell.column.id === "thumbnail"),
    [row]
  );

  const checkboxProps = undefined;
  // row.getToggleRowSelectedProps
  //   ? row.getToggleRowSelectedProps()
  //   : undefined;

  function renderCell(cell: Cell<T, unknown>) {
    return flexRender(cell.column.columnDef.cell, cell.getContext());
  }

  return (
    <Grid.Item
      checkboxProps={selectable ? checkboxProps : undefined}
      actions={actions && renderCell(actions)}
      thumbnail={thumbnail && renderCell(thumbnail)}
    >
      <>
        {row.getVisibleCells().map((cell, i) => {
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
                    {cell.column.columnDef.header}
                    {`: `}
                  </span>
                )}
              {renderCell(cell)}
            </div>
          );
        })}
      </>
    </Grid.Item>
  );
}

interface Props<T extends Record<string, unknown>> {
  row: Row<T>;
  selectable?: boolean;
}

export default ModelGridItem;
