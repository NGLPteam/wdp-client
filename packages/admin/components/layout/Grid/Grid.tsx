import React from "react";
import times from "lodash/times";
import * as Styled from "./Grid.styles";
import GridItem from "./GridItem";
import { LoadingSkeleton } from "components/atomic";

const Grid = ({ loading, children, showCheckboxes, id }: Props) => {
  return (
    <Styled.Wrapper id={id} data-grid-checkboxes={showCheckboxes}>
      <Styled.Inner>
        {loading
          ? times(20, (i) => (
              <Styled.LoadingItem key={i}>
                <LoadingSkeleton />
              </Styled.LoadingItem>
            ))
          : children}
      </Styled.Inner>
    </Styled.Wrapper>
  );
};

interface Props {
  children: JSX.Element;
  showCheckboxes?: boolean;
  id?: string;
  loading?: boolean;
}

export default Grid;
Grid.Item = GridItem;
