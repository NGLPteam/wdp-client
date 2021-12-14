import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond } from "theme/mixins";

export const Inner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-xlg);
`;

export const Header = styled.h3``;

export const List = styled.ul`
  ${lGrid()}
  row-gap: ${pxToRem(30)};
  margin-block-start: var(--padding-xl);
`;

export const ListItem = styled.li`
  grid-column: span 3;

  ${respond(`grid-column: span 4;`, 100)}
  ${respond(`grid-column: span 6;`, 70)}
  ${respond(`grid-column: span 12;`, 30)}
`;

export const ItemTitle = styled.h4``;

export const ItemMetadata = styled.div`
  padding-block-start: ${pxToRem(12)};
`;

export const VolumeIssue = styled.span`
  & + & {
    &:before {
      content: ", ";
    }
  }
`;
