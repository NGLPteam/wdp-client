import React from "react";
import { ButtonControl } from "components/atomic";
import * as Styled from "./DataViewToggle.styles";

const DataViewToggle = ({ selectedView, controlsID, onClick }: Props) => {
  const handleOnClick = () => {
    onClick && onClick(selectedView === "table" ? "grid" : "table");
  };

  return (
    <Styled.Wrapper>
      <ButtonControl
        icon="viewGrid"
        aria-controls={controlsID}
        aria-pressed={selectedView === "grid"}
        aria-disabled={selectedView === "grid"}
        aria-label="Grid"
        onClick={handleOnClick}
      ></ButtonControl>
      <ButtonControl
        icon="viewList"
        aria-controls={controlsID}
        aria-pressed={selectedView === "table"}
        aria-disabled={selectedView === "table"}
        aria-label="Table"
        onClick={handleOnClick}
      ></ButtonControl>
    </Styled.Wrapper>
  );
};

interface Props {
  selectedView: "table" | "grid";
  controlsID: string;
  onClick: (selectedView: string) => void;
}

export default DataViewToggle;
