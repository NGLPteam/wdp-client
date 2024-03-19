import React, { useMemo } from "react";
import { flexRender, HeaderContext } from "@tanstack/react-table";
import Grid from "components/layout/Grid/Grid";
import type { Cell, Row } from "@tanstack/react-table";

function ModelGridItem<T extends Record<string, unknown>>({ row }: Props<T>) {
  const actions = useMemo(
    () => row.getVisibleCells().find((cell) => cell.column.id === "actions"),
    [row],
  );

  const thumbnail = useMemo(
    () => row.getVisibleCells().find((cell) => cell.column.id === "thumbnail"),
    [row],
  );

  function renderCell(cell: Cell<T, unknown>) {
    return flexRender(cell.column.columnDef.cell, cell.getContext());
  }

  return (
    <Grid.Item
      selectable={row.getCanMultiSelect()}
      checkboxProps={{
        checked: row.getIsSelected(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler(),
      }}
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
                    {flexRender(
                      cell.column.columnDef.header,
                      {} as HeaderContext<T, unknown>,
                    )}
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
}

export default ModelGridItem;
