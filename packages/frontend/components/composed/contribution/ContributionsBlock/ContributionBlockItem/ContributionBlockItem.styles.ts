import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond } from "theme/mixins";

export const ListItem = styled.li`
  grid-column: span 3;
  display: flex;

  ${respond(`grid-column: span 4;`, 100)}
  ${respond(`grid-column: span 6;`, 70)}
  ${respond(`grid-column: span 12;`, 30)}

  > * + * {
    padding-inline-start: ${pxToRem(20)};
  }
`;

export const ItemAvatar = styled.div`
  flex: none;
`;

export const ItemMetadata = styled.div`
  padding-block-start: var(--padding-xs);
`;
