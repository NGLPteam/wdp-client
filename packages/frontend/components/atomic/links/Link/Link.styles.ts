import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aLinkHoverFocus, aLinkBase } from "theme/mixins";
import { IconFactory as BaseIconFactory } from "components/factories";
import BaseLink from "next/link";

export type LinkProps = Omit<
  React.ComponentProps<typeof BaseLink>,
  "href" | "as"
> & {
  href?: string | null;
};

export const Link = styled(BaseLink)<LinkProps>`
  display: inline-block;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const LinkText = styled.span`
  display: inline;
  ${aLinkBase}

  a:focus-visible &,
  button:focus-visible & {
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

export const ORCIDLink = styled.a`
  display: inline-flex;
  align-items: flex-start;
  word-break: break-all;

  > * + * {
    margin-inline-start: ${pxToRem(8)};
  }
`;
