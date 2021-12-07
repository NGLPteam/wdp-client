import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const List = styled.ul`
  margin-block-start: var(--padding-md);
  padding-block-start: var(--padding-md);
  padding-block-end: var(--padding-md);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`;

export const ListItem = styled.li`
  line-height: 1rem;

  & + & {
    padding-block-start: ${pxToRem(20)};
  }
`;
