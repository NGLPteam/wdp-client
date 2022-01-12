import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { aLinkHoverFocus } from "theme/mixins";

export const ItemHeader = styled.h4`
  display: inline-block;
`;

export const ItemLink = styled.a`
  display: block;

  &:hover,
  &:focus-within {
    ${ItemHeader} {
      ${aLinkHoverFocus}
    }
  }
`;

export const ItemCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 280px;
`;

export const ItemSubheader = styled.h5`
  margin-block-start: var(--padding-xxs);
`;

export const ItemText = styled.div`
  margin-block-start: ${pxToRem(20)};
`;

export const ItemMetadata = styled.div`
  margin-block-start: ${pxToRem(12)};
`;
