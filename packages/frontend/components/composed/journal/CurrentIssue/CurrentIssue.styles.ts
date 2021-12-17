import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond } from "theme/mixins";

interface BaseProps {
  $hasImage?: boolean;
}

const innerWithImage = `
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

const innerWithoutImage = `
  grid-template-areas: ". text text text text text text text text text text .";
  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-areas: "text";
  `,
    70
  )}
`;

export const Inner = styled.div<BaseProps>`
  padding-block: ${pxToRem(100)};

  ${lGrid()}

  ${({ $hasImage }) => ($hasImage ? innerWithImage : innerWithoutImage)}
`;

export const ImageBlock = styled.div`
  grid-area: image;
  margin-block-end: ${pxToRem(20)};
`;

export const TextBlock = styled.div`
  grid-area: text;
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
