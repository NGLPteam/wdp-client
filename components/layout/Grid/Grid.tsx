import React from "react";
import * as Styled from "./Grid.styles";
import GridItem from "./GridItem";

const Grid = ({ children, showCheckboxes, id }: Props) => {
  return (
    <Styled.Wrapper id={id} data-grid-checkboxes={showCheckboxes}>
      <Styled.Inner>{children}</Styled.Inner>
    </Styled.Wrapper>
  );
};

interface Props {
  children: JSX.Element;
  showCheckboxes?: boolean;
  id?: string;
}

export default Grid;
Grid.Item = GridItem;
