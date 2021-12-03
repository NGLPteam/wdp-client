import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond, lGrid } from "theme/mixins";

const MOBILE_BREAK = 70;

export const HeroInner = styled.div`
  ${lGrid()}
  grid-template-areas: "left left left left left left left left . right right right";
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto); 
    grid-template-areas: 
      "left"
      "right";
    `,
    MOBILE_BREAK
  )}
`;

export const LeftSide = styled.div`
  grid-area: left;
`;

export const RightSide = styled.div`
  grid-area: right;
`;

export const TitleBlock = styled.div`
  padding-block-end: var(--padding-lg);

  > * + * {
    padding-block-start: var(--padding-sm);
  }
`;

export const DataBlock = styled.div`
  padding-block-end: ${pxToRem(20)};

  > * + * {
    padding-block-start: var(--padding-xs);
  }
`;

export const Summary = styled.p`
  padding-block-end: ${pxToRem(28)};
`;
