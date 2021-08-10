import styled, { css } from "styled-components";
import { basePadding, aTextGlow } from "theme/mixins/appearance";
import { tLabel } from "theme/mixins/typography";
import { globalNavRespond, noFlexGapSupport, respond } from "theme/mixins/base";

export const ProviderBarBlock = styled.div`
  ${globalNavRespond(`display: none`)}
`;

export const Nav = styled.nav`
  padding: 0 var(--container-column-margin);
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--grid-column-gap);
  margin: 0 auto;
  max-width: var(--container-max);
  padding: ${basePadding(5)} 0;

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: var(--grid-column-gap);
    }
  `)}

  /* Push all items after the first child to the right */
  > *:first-child {
    margin-inline-end: auto;
  }
`;

export const SearchBlock = styled.div`
  ${respond(`display: none`, 60)}
`;

export const AccountBlock = styled.div`
  ${globalNavRespond(`display: none`)}
`;

export const DesktopNavBlock = styled.div`
  ${globalNavRespond(`display: none`)}
`;

export const MobileNavBlock = styled.div`
  ${globalNavRespond(`display: none`, "min")}
`;

export const Item = styled.li`
  & + & {
    margin-inline-start: ${basePadding(7)};
  }
`;

export const Link = styled.a<LinkProps>`
  display: inline-block;
  border-bottom: 2px solid transparent;
  padding-block-end: 1px;
  transition: var(--border-transition), var(--color-transition);
  color: var(--accent-light);
  ${tLabel("md")}

  &:hover {
    color: var(--accent-lighter);
    border-color: var(--accent-lighter);
  }

  &:focus-visible {
    outline: 0;
    ${aTextGlow("darkMode")}
  }

  &:active,
  &[aria-expanded="true"] {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--accent-color);
      border-color: var(--accent-color);
    `}
`;

interface LinkProps {
  active?: boolean;
}
