import React, { useCallback } from "react";
import { ButtonControl } from "components/atomic";

const DataViewToggle = ({
  viewOptions = [DataViewOptions.table, DataViewOptions.grid],
  selectedView,
  controlsID,
  onClick,
}: DataViewToggleProps) => {
  const selectGrid = useCallback(() => {
    onClick(DataViewOptions.grid);
  }, [onClick]);

  const selectTable = useCallback(() => {
    onClick(DataViewOptions.table);
  }, [onClick]);

  if (viewOptions.length === 1) return null;

  return (
    <div className="l-flex l-flex--gap-sm">
      {viewOptions.includes(DataViewOptions.grid) && (
        <ButtonControl
          icon="viewGrid"
          aria-controls={controlsID}
          aria-pressed={selectedView === "grid"}
          aria-disabled={selectedView === "grid"}
          aria-label="Grid"
          onClick={selectGrid}
        />
      )}
      {viewOptions.includes(DataViewOptions.table) && (
        <ButtonControl
          icon="viewList"
          aria-controls={controlsID}
          aria-pressed={selectedView === "table"}
          aria-disabled={selectedView === "table"}
          aria-label="Table"
          onClick={selectTable}
        />
      )}
    </div>
  );
};

export enum DataViewOptions {
  table = "table",
  grid = "grid",
}

export interface DataViewToggleProps {
  selectedView: DataViewOptions;
  controlsID: string;
  viewOptions?: DataViewOptions[];
  onClick: (view: DataViewOptions) => void;
}

export default DataViewToggle;
