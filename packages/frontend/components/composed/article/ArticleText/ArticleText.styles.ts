import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond, fluidScale, tHeading } from "theme/mixins";

export const BodyWrapper = styled.div`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-md);
`;

export const BodyInner = styled.div`
  ${lGrid()}
  grid-template-areas: "text text text text text text text text . toc toc toc";

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-areas:
      "toc"
      "text";`,
    100
  )}
`;

export const TextBlock = styled.div`
  grid-area: text;

  h1 {
    ${tHeading(2)}
  }

  h2 {
    ${tHeading(3)}
  }

  h3 {
    ${tHeading(4)}
  }

  h4 {
    ${tHeading(5)}
  }
`;

export const ImageBlock = styled.div`
  margin-block-end: var(--padding-lg);
`;

export const TOCBlock = styled.div`
  grid-area: toc;
  padding-block-end: ${fluidScale("100px", "50px")};
`;

export const TOCInner = styled.div`
  position: sticky;
  top: var(--padding-lg);
`;

export const TOCHeader = styled.h3`
  padding-block-end: var(--padding-sm);
  border-bottom: 1px solid var(--border-color);
`;

export const TOCList = styled.ul`
  padding-block-start: var(--padding-md);
  padding-block-end: var(--padding-md);
  border-bottom: 1px solid var(--border-color);
`;

export const TOCListItem = styled.li`
  & + & {
    padding-block-start: ${pxToRem(20)};
  }
`;
