import React from "react";
import * as Styled from "./Table.styles";
import { IconFactory } from "components/factories";
import { SortProps } from "helpers/sharedTypes";

const TableSortButton = ({ children, sort, ...buttonProps }: Props) => {
  const arrowRotation = sort?.direction === "ascending" ? 0 : 180;

  return (
    <Styled.SortButton {...buttonProps}>
      <span>{children}</span>
      <IconFactory icon="chevron" rotate={arrowRotation} aria-hidden="true" />
    </Styled.SortButton>
  );
};

interface Props {
  children: string | JSX.Element | JSX.Element[];
  sort: SortProps;
  onClick: () => void;
}

export default TableSortButton;
