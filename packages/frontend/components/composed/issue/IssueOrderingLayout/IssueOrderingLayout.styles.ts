import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const List = styled.ul``;

export const ListItem = styled.li`
  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const Footer = styled.div`
  padding-block-start: ${pxToRem(56)};
`;
