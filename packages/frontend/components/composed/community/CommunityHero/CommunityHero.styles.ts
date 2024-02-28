import styled, { css } from "styled-components";
import BaseImage from "next/legacy/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import { fluidScale, respond } from "theme/mixins";
import { containerWidths } from "theme/base/variables";

export const Hero = styled.header`
  display: grid;
  position: relative;
  max-width: ${containerWidths.max};
  margin-inline-start: auto;
  margin-inline-end: auto;

  &[data-hero-image="true"] {
    grid-template-columns: 1fr 1fr;
    height: ${fluidScale("490px", "200px")};
  }

  ${respond(
    css`
      grid-template-columns: 60% 40%;

      &[data-hero-image="true"] {
        height: auto;
      }
    `,
    80,
  )}

  ${respond(
    css`
      grid-template-columns: auto;
    `,
    60,
  )}
`;

export const HeroInner = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: center;
  justify-self: center;
  width: 100%;
  max-width: calc(${containerWidths.wide} + var(--container-v-padding) * 2);
  padding-inline-start: var(--container-v-padding);
  padding-inline-end: var(--container-v-padding);
  padding-block-start: var(--container-padding-md);

  [data-hero-image="true"] & {
    z-index: 1;
    padding-block-end: var(--container-padding-md);
  }

  [data-hero-layout="TWO_COLUMN"] & {
    grid-column: 1;
    max-width: 650px;
    justify-self: end;

    ${respond(
      css`
        grid-column: 1 / -1;
      `,
      60,
    )}
  }
`;

export const Summary = styled.div`
  padding-block-start: ${pxToRem(29)};
`;

export const ImageWrapper = styled.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;

  [data-hero-layout="ONE_COLUMN"] & {
    grid-column: 1 / -1;
  }

  [data-hero-layout="TWO_COLUMN"] & {
    ${respond(
      css`
        grid-column: 1 / -1;
        grid-row: 2;
        height: 300px;
      `,
      60,
    )}
  }
`;

export const Image = styled(BaseImage)`
  [data-hero-layout="ONE_COLUMN"] & {
    opacity: 0.3;
  }
`;
