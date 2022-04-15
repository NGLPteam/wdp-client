import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid var(--border-color);
  min-height: ${pxToRem(30)};
  margin-block-end: var(--padding-md);
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-block-end: var(--padding-xl);
`;
