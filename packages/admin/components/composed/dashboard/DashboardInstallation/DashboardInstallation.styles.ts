import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { tHeading, tLabel } from "theme/mixins/typography";

export const List = styled.ul`
  margin-block-start: ${pxToRem(29)};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border-bottom: 1px solid var(--border-color);
  padding-block-end: ${pxToRem(6)};

  & + & {
    padding-block-start: ${pxToRem(28)};
  }
`;

export const ItemLabel = styled.span`
  display: inline-block;
  text-transform: capitalize;
  padding-inline-end: ${pxToRem(8)};
  ${tHeading(3)}
`;

export const ItemValue = styled.span`
  ${tLabel("lg")}
  color: var(--accent-color);
`;
