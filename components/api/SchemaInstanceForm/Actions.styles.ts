import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { basePadding } from "theme/mixins/appearance";

export const Footer = styled.footer`
  position: relative;
  background: var(--background-color);
  padding-block-start: ${pxToRem("30px")};
  padding-block-end: ${basePadding(11)};
  border-top: 1px solid var(--border-color);
`;
