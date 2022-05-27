import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond, lGrid, fluidScale } from "theme/mixins";

const MOBILE_BREAK = 100;

export const Inner = styled.div`
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
    margin-block-start: var(--padding-rg);
    padding-block-start: var(--padding-rg);

  `,
    MOBILE_BREAK
  )}
`;

export const Logo = styled.div`
  margin-block-end: var(--padding-lg);
`;

export const Title = styled.div`
  > * + * {
    margin-block-start: var(--padding-rg);
  }
`;

export const LeftContent = styled.div`
  margin-block-start: ${pxToRem(32)};

  > * + * {
    margin-block-start: var(--padding-rg);
  }
`;

export const Alert = styled.div`
  margin-block-end: var(--padding-rg);
`;
