import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond } from "theme/mixins";

const MOBILE_BREAK = 70;

export const HeroInner = styled.div`
  ${lGrid()}
  grid-template-areas: "title title title title title title title title . metadata metadata metadata";
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 
      "title"
      "metadata";
  `,
    MOBILE_BREAK
  )}
`;

export const TitleBlock = styled.div`
  max-width: ${pxToRem(670)};
  grid-area: title;
`;

export const MetadataBlock = styled.div`
  grid-area: metadata;
`;

export const Title = styled.h2`
  margin-block-end: var(--padding-rg);
`;

export const Subtitle = styled.h3`
  margin-block-end: var(--padding-xl);
`;

export const ISSN = styled.div`
  color: var(--color-base-neutral80);
`;

export const Number = styled.span`
  color: var(--color-base);
`;
