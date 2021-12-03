import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { lGrid } from "theme/mixins";

export const BodyWrapper = styled.div`
  ${lGrid()}
  grid-template-areas: "text text text text text text text text . toc toc toc";
`;

export const TextBlock = styled.div`
  grid-area: text;
`;

export const TOCBlock = styled.div`
  grid-area: toc;
`;

export const ImageBlock = styled.div`
  margin-block-end: var(--padding-lg);
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
