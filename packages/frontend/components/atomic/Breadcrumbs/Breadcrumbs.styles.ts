import { pxToRem } from "@wdp/lib/theme/functions";
import { tTruncate } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { respond, aLinkHoverFocus } from "theme/mixins";

const TABLET_BREAK = 60;

export const List = styled.ul`
  display: flex;

  &[data-mobile] {
    ${respond("display: none;", TABLET_BREAK, "min")}
  }

  &[data-desktop] {
    ${respond("display: none;", TABLET_BREAK)}
  }
`;

export const Item = styled.li`
  display: flex;
  color: var(--color-lighter);
`;

export const Delimiter = styled.span`
  display: inline-block;
  padding-inline-start: ${pxToRem(10)};
  padding-inline-end: ${pxToRem(10)};
`;

export const ItemText = styled.span`
  display: inline-block;
  max-width: 270px;

  ${respond(`max-width: 20vw;`, 100)}

  ${respond(`max-width: 60vw;`, TABLET_BREAK)}

  ${tTruncate}
`;

export const Ellipses = styled.span`
  &:hover,
  button:focus-visible & {
    ${aLinkHoverFocus}
  }
`;
