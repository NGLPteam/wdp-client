import React from "react";
import * as Styled from "./Table.styles";
import { IconFactory } from "components/factories";

const TableSortButton = ({ desc, ...buttonProps }: Props) => {
  const arrowRotation = desc ? 180 : 0;

  return (
    <Styled.SortButton {...buttonProps}>
      <IconFactory icon="chevron" rotate={arrowRotation} aria-hidden="true" />
    </Styled.SortButton>
  );
};

interface Props {
  desc: boolean | null;
}

export default TableSortButton;
