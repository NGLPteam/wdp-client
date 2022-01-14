import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import BaseImage from "next/image";
import { respond, lGrid } from "theme/mixins";

export const Inner = styled.div`
  ${lGrid()}
  padding-block-start: ${pxToRem(100)};
  padding-block-end: ${pxToRem(100)};

  ${respond(
    `
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "text"
        "image";
    `,
    70
  )}
`;

export const TextColumn = styled.div`
  grid-column: 2 / 6;

  ${respond(
    `
      grid-area: text;
    `,
    70
  )}
`;

export const HeaderBlock = styled.div`
  padding-block-end: ${pxToRem(12)};
  border-bottom: 1px solid currentColor;
`;

export const UnitsList = styled.ul`
  padding-block-start: ${pxToRem(28)};
  padding-block-end: var(--padding-lg);
  border-bottom: 1px solid currentColor;
`;

export const ListItem = styled.li`
  & + & {
    margin-block-start: ${pxToRem(20)};
  }
`;

export const UnitLink = styled.a`
  display: flex;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  > svg {
    flex-shrink: 0;
    margin-block-start: ${pxToRem(4)};
  }

  > * + * {
    padding-inline-start: ${pxToRem(14)};
  }
`;

export const ImageColumn = styled.div`
  grid-column: 7 / 12;

  ${respond(
    `
      grid-area: image;
      padding-block-start: var(--padding-xl);
    `,
    70
  )}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: ${pxToRem(300)};

  ${respond(`min-height: ${pxToRem(200)};`, 70)}
`;

export const Image = styled(BaseImage)`
  z-index: 0;
  width: 100%;
  height: auto;
  border-radius: ${pxToRem(16)};
`;
