import React from "react";
import * as Styled from "./Table.styles";
import { IconFactory } from "components/factories";

const TableSortIcon = ({ desc, isSorted, ...buttonProps }: Props) => {
  const arrowRotation = desc ? 180 : 0;

  return (
    <Styled.SortIcon {...buttonProps}>
      {isSorted === false ? (
        <IconFactory icon="sortable" aria-hidden="true" />
      ) : (
        <IconFactory icon="chevron" rotate={arrowRotation} aria-hidden="true" />
      )}
    </Styled.SortIcon>
  );
};

interface Props {
  desc?: boolean;
  isSorted?: boolean;
}

export default TableSortIcon;
