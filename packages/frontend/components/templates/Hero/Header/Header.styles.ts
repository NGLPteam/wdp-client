import styled, { css } from "styled-components";
import { respond, lGrid, fluidScale } from "theme/mixins";
import { containerWidths } from "theme/base/variables";
import { pxToRem } from "@wdp/lib/theme/functions";
import type { HeroImageLayout } from "@/types/graphql-schema";

const TABLET_BREAK = 120;
const MOBILE_BREAK = 100;

export const Inner = styled.div`
  ${lGrid()}
  grid-template-areas: "left left left left left left left left . right right right";
  padding-block-start: ${fluidScale("60px", "50px")};
  padding-block-end: ${fluidScale("60px", "50px")};

  ${respond(
    `grid-template-areas: "left left left left left left left left right right right right";`,
    TABLET_BREAK,
  )}

  ${respond(
    `
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "left"
    "right";
  `,
    MOBILE_BREAK,
  )}
`;

export const Left = styled.div`
  grid-area: left;

  > * + * {
    margin-block-start: var(--padding-rg);
  }
`;

export const Right = styled.div`
  grid-area: right;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  > * + * {
    margin-block-start: var(--padding-rg);
  }

  ${respond(
    `
    border-top: 1px solid var(--border-color);
    margin-block-start: var(--padding-rg);
    padding-block-start: var(--padding-rg);

  `,
    MOBILE_BREAK,
  )}
`;

export const Columns = styled.div<{ $layout?: HeroImageLayout }>`
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: center;
  justify-self: center;
  inline-size: 100%;
  max-inline-size: calc(
    ${containerWidths.wide} + var(--container-v-padding) * 2
  );
  padding-inline-start: var(--container-v-padding);
  padding-inline-end: var(--container-v-padding);
  padding-block-start: var(--container-padding-md);
  z-index: 1;
  padding-block-end: var(--container-padding-md);

  ${({ $layout }) =>
    $layout === "TWO_COLUMN" &&
    `grid-column: 1;
      max-inline-size: 650px;
      justify-self: end;

      ${respond(
        css`
          grid-column: 1 / -1;
        `,
        60,
      )}`}
`;

export const Summary = styled.h2``;

export const Aside = styled.span<{ $layout?: HeroImageLayout }>`
  display: block;

  ${({ $layout }) =>
    !!$layout &&
    ` padding-block-start: ${pxToRem(29)};
`}
`;

export const SidebarWrapper = styled.ul`
  text-align: right;
  justify-self: end;

  > li + li {
    margin-block-start: var(--padding-rg);
  }
`;
