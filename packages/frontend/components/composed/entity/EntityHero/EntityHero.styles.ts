import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const HeroInner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-xlg);
`;

export const Header = styled.h1`
  margin-block-end: ${pxToRem(80)};
`;
