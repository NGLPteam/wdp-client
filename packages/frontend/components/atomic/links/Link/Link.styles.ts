import styled from "styled-components";
import { aLinkHoverFocus, aLinkBase } from "theme/mixins";
import { IconFactory as BaseIconFactory } from "components/factories";

export const Link = styled.a`
  display: inline-block;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const LinkText = styled.span`
  display: inline;
  ${aLinkBase}

  /* stylelint-disable selector-type-no-unknown */
  ${Link}:hover &,
  ${Link}:focus-visible {
    ${aLinkHoverFocus}
  }
  /* stylelint-enable selector-type-no-unknown */
`;

export const IconFactory = styled(BaseIconFactory)`
  flex: 1 0 auto;
  margin-inline-start: var(--padding-xxs);
  padding-block-start: 1px;
  vertical-align: text-bottom;
`;
