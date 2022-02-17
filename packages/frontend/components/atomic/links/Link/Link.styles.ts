import styled from "styled-components";
import { aLinkHoverFocus, aLinkBase } from "theme/mixins";
import { IconFactory as BaseIconFactory } from "components/factories";

export const Link = styled.a`
  display: inline-block;

  &:focus {
    outline: none;
  }
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

export const IconFactory = styled(BaseIconFactory)`
  flex: 1 0 auto;
  padding-block-start: 1px;
  vertical-align: text-bottom;

  & + * {
    margin-inline-start: var(--padding-xxs);
  }

  * + & {
    margin-inline-start: var(--padding-xxs);
  }
`;
