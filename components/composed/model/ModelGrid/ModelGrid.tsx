import { Checkbox } from "components/atomic/forms";
import React from "react";
import { Row } from "react-table";

function ModelGrid<
  T extends Record<string, unknown> = Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>({ rows }: Props<T>) {
  const renderCheckbox = (row: Row<T>) => {
    const props = row.getToggleRowSelectedProps();

    return <Checkbox {...props} />;
  };

  return (
    <div className="l-grid" role="grid">
      {rows.map((row, i) => (
        <div role="gridcell" className="l-grid__item l-grid__item--3" key={i}>
          <div>{renderCheckbox(row)}</div>
          {row.cells.map((cell, i) => {
            return (
              <div key={i} className={i === 0 ? "t-weight-md" : "t-copy-sm"}>
                {cell.render("Cell")}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

interface Props<T extends Record<string, unknown> = Record<string, unknown>> {
  rows: Row<T>[];
}

export default ModelGrid;
