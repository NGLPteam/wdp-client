import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond, fluidScale } from "theme/mixins";

export const BodyWrapper = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);
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

export const TOCHeader = styled.h5`
  padding-block-end: var(--padding-sm);
  border-bottom: 1px solid var(--border-color);
`;

export const TOCList = styled.ul`
  padding-block: var(--padding-md);
  border-bottom: 1px solid var(--border-color);
`;

export const TOCListItem = styled.li`
  & + & {
    padding-block-start: ${pxToRem(20)};
  }
`;
