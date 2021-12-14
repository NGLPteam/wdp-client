import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

interface BaseProps {
  $hasImage?: boolean;
}

export const Inner = styled.div`
  padding-block: ${pxToRem(100)};
`;

export const ImageBlock = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 2;
  margin-block-end: ${pxToRem(20)};
`;

export const TextBlock = styled.div<BaseProps>`
  grid-column: 2 / 12;

  ${({ $hasImage }) => $hasImage && `grid-column: 5 / span 8;`};
`;

export const TitleBlock = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(12)};
  }
`;

export const ArticleList = styled.ul`
  padding-block-start: ${pxToRem(10)};
`;

export const Item = styled.li`
  padding-block-start: ${pxToRem(28)};
  border-top: 1px solid var(--color-lighter);
  padding-block-end: ${pxToRem(30)};
`;
