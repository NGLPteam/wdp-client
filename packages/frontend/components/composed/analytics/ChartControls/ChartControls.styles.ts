import styled from "styled-components";
import { respond, aLinkBase, aLinkHoverFocus } from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  grid-area: controls;

  ${respond(`flex-direction: column; gap: 12px;`, 60)}
`;

export const LinkText = styled.span`
  display: inline;
  ${aLinkBase}

  [data-focus-visible-added] & {
    ${aLinkHoverFocus}
  }

  a:hover &,
  button:hover & {
    ${aLinkHoverFocus}
  }
`;
