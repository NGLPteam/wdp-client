import React, { useCallback } from "react";
import { ButtonControl } from "components/atomic";
import { ALL_VIEW_OPTIONS, ViewOptions } from "utils/view-options";

const DataViewToggle = ({
  viewOptions = ALL_VIEW_OPTIONS,
  selectedView,
  controlsID,
  onClick,
}: DataViewToggleProps) => {
  const selectGrid = useCallback(() => {
    onClick(ViewOptions.grid);
  }, [onClick]);

  const selectTable = useCallback(() => {
    onClick(ViewOptions.table);
  }, [onClick]);

  if (viewOptions.length === 1) return null;

  return (
    <div className="l-flex l-flex--gap-sm">
      {viewOptions.includes(ViewOptions.grid) && (
        <ButtonControl
          icon="viewGrid"
          aria-controls={controlsID}
          aria-pressed={selectedView === "grid"}
          aria-disabled={selectedView === "grid"}
          aria-label="Grid"
          onClick={selectGrid}
        />
      )}
      {viewOptions.includes(ViewOptions.table) && (
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

export interface DataViewToggleProps {
  selectedView: ViewOptions;
  controlsID: string;
  viewOptions?: ViewOptions[];
  onClick: (view: ViewOptions) => void;
}

export default DataViewToggle;
