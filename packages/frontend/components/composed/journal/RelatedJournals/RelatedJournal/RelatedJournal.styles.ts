import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { aLinkBase, aLinkHoverFocus } from "theme/mixins";

export const Item = styled.div`
  display: block;
`;

export const ItemCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 280px;
`;

export const ItemSubheader = styled.div`
  margin-block-start: var(--padding-xxs);
`;

export const LinkText = styled.span`
  ${aLinkBase}

  ${/* sc-selector */ Item}:hover &,
  ${/* sc-selector */ Item}:focus & {
    ${aLinkHoverFocus}
  }
`;

export const ItemText = styled.div`
  margin-block-start: ${pxToRem(20)};
`;

export const ItemMetadata = styled.div`
  margin-block-start: ${pxToRem(12)};
`;
