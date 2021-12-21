import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { fluidScale, lGrid, respond } from "theme/mixins";

export const SectionInner = styled.div`
  ${lGrid()}
  padding-block-start: ${fluidScale("100px", "80px")};
  padding-block-end: 100px;
`;

export const TextWrapper = styled.div`
  grid-column: 3 / span 8;

  ${respond(`grid-column: 2 / 12;`, 70)}
  ${respond(`grid-column: 1 / -1;`, 50)}
`;

export const List = styled.ul`
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin-block-start: ${pxToRem(12)};
  padding-block-start: ${pxToRem(28)};
  padding-block-end: ${pxToRem(28)};
`;
