import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";

export const Table = styled.table`
  --table-border: 1px solid var(--neutral40);
  --table-border-radius: ${pxToRem("6px")};
  --table-column-gap: ${basePadding(4)};
  // margin: 0 calc(var(--table-column-gap) * -1);
  // width: calc(100% + (var(--table-column-gap) * 2));
  width: 100%;
  border-collapse: collapse;
  border-top: var(--table-border);
  border-bottom: var(--table-border);
`;

export const TableBody = styled.tbody`
  &:before,
  &:after {
    content: "";
    display: block;
    height: ${basePadding(6)};
  }
`;

export const HeaderCell = styled.th`
  border-bottom: var(--table-border);
  cursor: default;

  &[aria-sort] {
    cursor: pointer;
  }
`;

export const HeaderCellInner = styled.span`
  display: flex;
  align-items: center;
  padding-top: ${pxToRem("7px")};
  padding-bottom: ${pxToRem("7px")};
  padding-inline-end: var(--table-column-gap);
  ${tLabel("sm")}
  text-align: left;

  > * + * {
    margin-inline-start: ${basePadding(2)};
  }
`;

export const Cell = styled.td`
  padding-top: ${basePadding(2)};
  padding-bottom: ${basePadding(2)};
  padding-inline-end: var(--table-column-gap);

  &:first-child {
    border-top-left-radius: var(--table-border-radius);
    border-bottom-left-radius: var(--table-border-radius);
  }

  &:last-child {
    border-top-right-radius: var(--table-border-radius);
    border-bottom-right-radius: var(--table-border-radius);
  }
`;

export const Row = styled.tr`
  &:hover ${Cell}, &:focus {
    background-color: var(--neutral05);
    cursor: pointer;
  }
`;

export const HeaderRow = styled.tr``;
