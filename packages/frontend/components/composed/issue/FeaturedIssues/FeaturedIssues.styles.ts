import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { fluidScale, tLineClamp } from "theme/mixins";

export const SectionInner = styled.div`
  padding-block-start: ${pxToRem(100)};
  padding-block-end: ${pxToRem(100)};
  max-width: ${pxToRem(964)};
  margin-inline: auto;
`;

export const HeaderBlock = styled.header`
  border-bottom: 1px solid var(--border-color);
  padding-block-end: var(--padding-rg);
  margin-block-end: var(--padding-xl);
`;

export const List = styled.ul`
  border-bottom: 1px solid var(--border-color);
  padding-block-end: var(--padding-xl);
  margin-block-end: var(--padding-xl);
`;

export const ListItem = styled.li`
  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const ItemLink = styled.a`
  display: flex;
`;

export const ItemCoverBlock = styled.div`
  margin-inline-end: var(--padding-lg);
  flex: 0 0 auto;
  max-width: ${fluidScale("120px", "70px", 70)};
`;

export const ItemTitleBlock = styled.div`
  padding-block-end: ${pxToRem(12)};

  > * + * {
    padding-block-start: var(--padding-xs);
  }
`;

export const ItemSummary = styled.p`
  padding-block-start: var(--padding-sm);
  ${tLineClamp(2)}
`;

export const ItemReadMore = styled.div`
  padding-block-start: ${pxToRem(10)};
`;
