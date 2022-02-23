import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aFocus, lGrid, respond, aBgCustom10 } from "theme/mixins";

// This section's background changes if bumped up against a white background
export const Section = styled.section`
  .a-bg-neutral00 + & {
    ${aBgCustom10()}
  }
`;

export const Inner = styled.div`
  padding-block-start: var(--container-padding-xl);
  padding-block-end: var(--container-padding-xl);

  ${lGrid()}

  grid-template-areas: "image image image . text text text text text text text text";
  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "text";
  `,
    70
  )}
`;

export const Label = styled.div`
  margin-block-end: var(--padding-rg);
`;

export const ImageBlock = styled.div`
  grid-area: image;
  margin-block-end: ${pxToRem(20)};
  max-width: ${pxToRem(240)};
`;

export const ImageLink = styled.a`
  display: inline-block;
  width: 100%;
  ${aFocus()}
`;

export const TextBlock = styled.div`
  grid-area: text;
`;

export const TitleBlock = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(12)};
  }
`;

export const IssueTitle = styled.div`
  > * + * {
    display: inline-block;
    margin-inline-start: var(--padding-md);
  }
`;

export const ArticleList = styled.ul`
  padding-block-start: ${pxToRem(10)};
`;

export const Item = styled.li`
  padding-block-start: ${pxToRem(28)};
  border-top: 1px solid var(--border-color);
  padding-block-end: ${pxToRem(30)};
`;

export const Footer = styled.div`
  border-top: 1px solid var(--border-color);
  padding-block-start: var(--padding-lg);

  @media print {
    display: none;
  }
`;
