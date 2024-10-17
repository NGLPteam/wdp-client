import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond, lGrid, tHeading } from "theme/mixins";
import BaseContainer from "@/components/layout/Container";

export const Container = styled(BaseContainer)`
  padding-block: var(--container-padding-xl);
`;

export const HeroImage = styled.div`
  block-size: ${pxToRem(300)};
  inline-size: ${pxToRem(225)};
  background: var(--color-base-blueDark);
  grid-area: image;
`;

export const Header = styled.h3`
  padding-block-end: 0.75rem;
  border-bottom: 1px solid var(--border-color);
`;

export const Grid = styled.div`
  ${lGrid()}

  grid-template-areas: "image image image . text text text text text text text text";
  ${respond(
    `
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "text";
`,
    70,
  )}
`;

export const TextColumn = styled.div`
  grid-area: text;

  > * + * {
    margin-block-start: 1.5rem;
  }
`;

export const Entity = styled.div`
  padding-block-end: 0.75rem;
  border-bottom: 1px solid var(--border-color);
`;

export const Context = styled.span`
  display: block;
  color: var(--color-base-neutral70);
  font-size: var(--font-size-base-sm);
  margin-block-end: 0.75rem;
`;

export const Metadata = styled.span`
  display: block;
  color: var(--color-base-neutral70);
  font-size: var(--font-size-base-sm);
  margin-block-start: 0.5rem;
`;

export const EntityHeader = styled.h4`
  ${tHeading(3)};
`;

export const Subheader = styled.span`
  display: block;
  color: var(--color-base-neutral70);
  margin-block-start: 0.25rem;
`;
