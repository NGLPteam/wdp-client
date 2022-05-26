import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond } from "theme/mixins";
import { ORCIDLink as ORCIDLinkBase } from "components/atomic";

export const ListItem = styled.li`
  grid-column: span 3;

  ${respond(`grid-column: span 6;`, 100)}
  ${respond(`grid-column: span 12;`, 70)}
`;

export const ItemContent = styled.div`
  display: flex;
  max-width: 100%;

  > * + * {
    padding-inline-start: ${pxToRem(20)};
  }
`;

export const ItemAvatar = styled.a`
  flex: none;
`;

export const ItemMetadata = styled.div`
  padding-block-start: var(--padding-xs);
`;

export const ORCIDLink = styled(ORCIDLinkBase)`
  > svg {
    margin-block-start: ${pxToRem(2)};
    color: var(--color-base);
  }
`;
