import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Header = styled.span`
  padding-inline-start: var(--padding-rg);
  padding-block-end: ${pxToRem(6)};
`;
