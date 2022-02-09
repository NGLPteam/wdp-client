import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond } from "theme/mixins";

const MOBILE_BREAK = 70;

export const HeroInner = styled.div`
  ${lGrid({
    rowGap: "var(--padding-xl)",
  })}
  grid-template-areas: "title title title title title title title title . metadata metadata metadata";
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-md);

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, auto);
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

  > * + * {
    margin-block-start: var(--padding-rg);
  }

  ${respond(
    `
    &:not(:empty) {
      border-top: 1px solid var(--border-color);
      padding-block-start: var(--padding-rg);
    }
    `,
    70
  )}
`;

export const Title = styled.h2`
  margin-block-end: var(--padding-rg);
`;

export const ISSN = styled.div`
  color: var(--color-base-neutral80);
`;

export const DOI = styled.span`
  color: var(--color-base-neutral80);
`;

export const Number = styled.span`
  color: var(--color-base);
`;
