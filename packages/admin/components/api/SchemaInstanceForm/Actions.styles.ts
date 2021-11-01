import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Footer = styled.footer`
  position: relative;
  background: var(--background-color);
  padding-block-start: ${pxToRem(30)};
  padding-block-end: ${pxToRem(44)};
  border-top: 1px solid var(--border-color);
`;
