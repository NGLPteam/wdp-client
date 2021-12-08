import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { tLabel, tLineClamp, tHeading } from "theme/mixins";

export const Inner = styled.div`
  padding-block: ${pxToRem(100)};
`;

export const Left = styled.div`
  padding-block-start: var(--padding-xs);
  grid-column: 1 / span 3;
`;

export const Right = styled.div`
  grid-column: 5 / span 8;
`;

export const Title = styled.h3`
  padding-block-end: ${pxToRem(10)};
`;

export const Meta = styled.div`
  margin-block-start: ${pxToRem(20)};
`;

export const Item = styled.div`
  padding-block-start: ${pxToRem(28)};
  border-top: 1px solid var(--color-lighter);
  padding-block-end: ${pxToRem(30)};
`;

export const ItemTitleBlock = styled.div`
  padding-block-end: ${pxToRem(12)};

  > * + * {
    padding-block-start: var(--padding-xs);
  }
`;

export const ItemSubtitle = styled.h5`
  ${tHeading(4)}
`;

export const ItemSummary = styled.p`
  padding-block-start: var(--padding-sm);
  ${tLineClamp(2)}
`;

export const ItemReadMore = styled.div`
  padding-block-start: ${pxToRem(10)};
  ${tLabel("sm")}
`;
