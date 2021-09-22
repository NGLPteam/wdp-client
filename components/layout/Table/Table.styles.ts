import styled, { css } from "styled-components";
import { aBgLight, aTextGlow, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { respond } from "theme/mixins/base";

export const TableWrapper = styled.div<TableWrapperProps>`
  --table-border: 1px solid var(--border-color);
  --table-border-radius: ${pxToRem("6px")};
  --table-column-gap: ${basePadding(4)};
  --table-margin-left: var(--table-column-gap);
  --table-margin-right: var(--table-column-gap);
  --checkbox-opacity: 0;
  --checkbox-visibility: 0;

  ${({ withRowSelection }) =>
    withRowSelection &&
    css`
      --table-margin-left: ${basePadding(13)};
    `}

  ${({ showCheckboxes }) =>
    showCheckboxes &&
    css`
      --checkbox-opacity: 1;
      --checkbox-visibility: 1;
    `}

  border-top: var(--table-border);

  ${respond(
    css`
      --table-margin-left: 0px;
      --table-margin-right: 0px;
      &[data-multiselect="true"] {
        --table-margin-left: 0px;
      }
    `,
    110
  )}
`;

interface TableWrapperProps {
  withRowSelection: boolean;
  showCheckboxes: boolean;
}

export const Table = styled.table`
  margin-inline-start: calc(var(--table-margin-left) * -1);
  margin-inline-end: calc(var(--table-margin-right) * -1);
  width: calc(100% + var(--table-margin-left) + var(--table-margin-right));
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
  cursor: default;
  border-bottom: var(--table-border);

  &[aria-sort] {
    cursor: pointer;
  }

  &[data-select-cell="true"] {
    padding-inline-start: var(--table-column-gap);
  }

  ${respond(
    css`
      &[data-select-cell="true"] {
        border-bottom: 0;
      }

      &[role="presentation"] {
        border-bottom: 0;
      }
    `,
    110,
    "min"
  )}
`;

export const HeaderCellInner = styled.span`
  display: flex;
  align-items: center;
  padding-block-start: ${pxToRem("7px")};
  padding-block-end: ${pxToRem("7px")};
  padding-inline-end: var(--table-column-gap);
  ${tLabel("sm")}
  text-align: start;

  > * + * {
    margin-inline-start: ${basePadding(2)};
  }
`;

export const FakeRow = styled.div`
  ${aBgLight("brand10")}
  height: ${pxToRem("32px")};
  border-radius: var(--table-border-radius);
`;

export const Cell = styled.td`
  padding-block-start: ${basePadding(2)};
  padding-block-end: ${basePadding(2)};
  padding-inline-end: var(--table-column-gap);
  max-width: 15vw;

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}

  &:first-child {
    border-top-left-radius: var(--table-border-radius);
    border-bottom-left-radius: var(--table-border-radius);
    width: var(--table-margin-left);
  }

  &:last-child {
    border-top-right-radius: var(--table-border-radius);
    border-bottom-right-radius: var(--table-border-radius);
    width: var(--table-margin-right);
  }
`;

export const SelectCell = styled.td`
  width: 0.1%;
  max-width: auto;
  white-space: nowrap;
  padding: 0 var(--table-column-gap);
  border-top-left-radius: var(--table-border-radius);
  border-bottom-left-radius: var(--table-border-radius);
`;

export const SelectCellInner = styled.div`
  visibility: var(--checkbox-visibility);
  opacity: var(--checkbox-opacity);
`;

export const LoadingRow = styled.tr``;

export const Row = styled.tr`
  --button-control-opacity: 0;
  --button-control-visibility: 0;

  &:hover,
  &:focus,
  &:focus-within {
    ${aBgLight("brand10")}
    transition: var(--background-transition);

    --button-control-opacity: 1;
    --button-control-visibility: 1;
    --checkbox-opacity: 1;
    --checkbox-visibility: 1;
  }
`;

export const SortIcon = styled.button`
  display: flex;
  align-items: center;
  padding-inline-start: ${pxToRem("8px")};

  &:hover {
    color: var(--accent-light);
  }

  &:focus {
    outline: 0;
  }

  &:focus-visible:not(:hover) {
    color: var(--accent-color);
    ${aTextGlow("lightMode")}
  }
`;

export const HeaderRow = styled.tr`
  --button-control-opacity: 0;
  --button-control-visibility: 0;

  &:hover,
  &:focus,
  &:focus-within {
    --button-control-opacity: 1;
    --button-control-visibility: 1;
    --checkbox-opacity: 1;
    --checkbox-visibility: 1;
  }
`;
