import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond, lGrid } from "theme/mixins";
import BaseContainer from "@/components/layout/Container";

export const Container = styled(BaseContainer)<{ $gap?: number }>`
  padding-block: var(--container-padding-xl);

  > * + * {
    margin-block-start: ${({ $gap }) => pxToRem($gap ?? 50)};
  }
`;

export const HeroImage = styled.div`
  min-block-size: 300px;
  background: var(--color-base-blueDark);
  grid-area: image;
  border-radius: ${pxToRem(16)};

  ${respond(`min-block-size: ${pxToRem(200)};`, 70)}
`;

export const Header = styled.h3`
  padding-block-end: 0.75rem;
  border-bottom: 1px solid var(--border-color);
`;

export const Grid = styled.div`
  ${lGrid()}
  grid-template-areas: "text text text text text . image image image image image image";

  ${respond(
    `
    grid-template-areas: "text text text text text text . image image image image image";
    `,
    120,
  )}

  ${respond(
    `
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "text"
        "image";
      row-gap: var(--padding-xl);
    `,
    100,
  )}
`;

export const TextColumn = styled.div`
  grid-area: text;
`;
