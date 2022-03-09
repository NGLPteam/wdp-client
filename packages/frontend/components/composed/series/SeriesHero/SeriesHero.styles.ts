import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond, lGrid, fluidScale } from "theme/mixins";

const MOBILE_BREAK = 100;

export const HeroInner = styled.div`
  ${lGrid()}
  grid-template-areas: "left left left left left left left left . right right right";
  padding-block-start: ${fluidScale("60px", "50px")};
  padding-block-end: ${fluidScale("60px", "50px")};

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

  > * + * {
    margin-block-start: var(--padding-rg);
  }

  ${respond(
    `
    border-top: 1px solid var(--border-color);
    padding-block-start: var(--padding-rg);
  `,
    MOBILE_BREAK
  )}
`;

export const ImageWrapper = styled.div`
  max-width: 225px;
`;

export const TitleBlock = styled.div`
  padding-block-end: var(--padding-lg);

  > * + * {
    padding-block-start: var(--padding-sm);
  }
`;

export const DataBlock = styled.div`
  > * + * {
    display: block;
    padding-block-start: var(--padding-xs);
  }
`;

export const DownloadButton = styled.span`
  display: block;
  padding-block-start: ${pxToRem(28)};
`;

export const Summary = styled.p`
  padding-block-start: ${pxToRem(20)};
`;
