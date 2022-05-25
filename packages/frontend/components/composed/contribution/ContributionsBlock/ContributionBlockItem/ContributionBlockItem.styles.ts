import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond, aLink } from "theme/mixins";

export const ListItem = styled.li`
  grid-column: span 3;

  ${respond(`grid-column: span 6;`, 100)}
  ${respond(`grid-column: span 12;`, 70)}
`;

export const ItemContent = styled.div`
  display: flex;

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

export const ORCIDLink = styled.a`
  ${aLink}
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: ${pxToRem(8)};
  }

  > svg {
    color: var(--color-base);
  }
`;
