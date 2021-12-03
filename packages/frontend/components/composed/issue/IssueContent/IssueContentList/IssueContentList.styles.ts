import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { tLineClamp } from "theme/mixins";

export const List = styled.ul``;

export const ListItem = styled.li`
  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const ItemLinkWrapper = styled.a`
  display: flex;
`;

export const ItemText = styled.div`
  flex: 1 1 auto;

  > * + * {
    padding-block-start: ${pxToRem(12)};
  }
`;

export const ItemThumbnail = styled.div`
  flex: 0;
  padding-inline-start: var(--padding-lg);
`;

export const ItemHeader = styled.div`
  > * + * {
    padding-block-start: ${pxToRem(4)};
  }
`;

export const ItemSummary = styled.div`
  ${tLineClamp(3)}
`;

export const ItemMetadata = styled.p`
  > * + * {
    padding-block-start: ${pxToRem(2)};
  }
`;
