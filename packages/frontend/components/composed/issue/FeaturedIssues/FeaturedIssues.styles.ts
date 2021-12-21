import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { lGrid, respond, tLabel, tLineClamp } from "theme/mixins";

export const SectionInner = styled.div`
  ${lGrid({ rowGap: "var(--padding-lg)" })}
  padding-block-start: ${pxToRem(100)};
  padding-block-end: ${pxToRem(100)};
`;

export const HeaderBlock = styled.header`
  border-bottom: 1px solid var(--border-color);
  padding-block-end: var(--padding-rg);
  grid-column: 2 / 12;
  ${respond(`grid-column: 1 / -1;`, 70)}
`;

export const List = styled.ul`
  border-bottom: 1px solid var(--border-color);
  padding-block-end: var(--padding-xl);
  grid-column: 2 / 12;
  ${respond(`grid-column: 1 / -1;`, 70)}
`;

export const ListItem = styled.li`
  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: 2 / 12;
  ${respond(`grid-column: 1 / -1;`, 70)}
`;

export const ItemLink = styled.a`
  display: flex;
  ${respond(`flex-wrap: wrap;`, 50)}
`;

export const ItemCoverBlock = styled.div`
  margin-inline-end: var(--padding-lg);
  flex: 0 0 120px;
  ${respond(`margin-block-end: var(--padding-lg);`, 50)}
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
  margin-block-start: ${pxToRem(10)};
  ${tLabel("sm")}
`;

export const ItemPrimaryMetadata = styled.ul`
  display: flex;
  flex-wrap: wrap;

  > * + * {
    &:before {
      content: ", ";
    }
  }
`;
