import React from "react";
import { ButtonControl } from "components/atomic";
import * as Styled from "./DataViewToggle.styles";

const DataViewToggle = ({ selectedView, controlsID, onClick }: Props) => {
  return (
    <Styled.Wrapper>
      <ButtonControl
        icon="viewGrid"
        aria-controls={controlsID}
        aria-pressed={selectedView === "grid"}
        aria-disabled={selectedView === "grid"}
        aria-label="Grid"
        onClick={onClick}
      ></ButtonControl>
      <ButtonControl
        icon="viewList"
        aria-controls={controlsID}
        aria-pressed={selectedView === "table"}
        aria-disabled={selectedView === "table"}
        aria-label="Table"
        onClick={onClick}
      ></ButtonControl>
    </Styled.Wrapper>
  );
};

interface Props {
  selectedView: "table" | "grid" | string;
  controlsID: string;
  onClick: () => void;
}

export default DataViewToggle;
