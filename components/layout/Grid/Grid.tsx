import React from "react";
import * as Styled from "./Grid.styles";
import GridItem from "./GridItem";

const Grid = ({ children, showCheckboxes }: Props) => {
  return (
    <Styled.Wrapper className="l-grid" showCheckboxes={showCheckboxes}>
      {children}
    </Styled.Wrapper>
  );
};

interface Props {
  children: JSX.Element;
  showCheckboxes?: boolean;
}

export default Grid;
Grid.Item = GridItem;
