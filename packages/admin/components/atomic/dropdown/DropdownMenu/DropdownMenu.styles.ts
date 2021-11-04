import styled, { css } from "styled-components";
import { Menu as BaseMenu, MenuItem } from "reakit/Menu";
import { aBgLight, aBgDark } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";

export const MenuWrapper = styled(BaseMenu)`
  z-index: var(--z-index-dropdown);

  &:focus {
    outline: 0;
  }
`;

export const Menu = styled.div<StyledMenuProps>`
  ${({ isMainNav }) =>
    isMainNav
      ? css`
          --menu-align-items: flex-start;
          --menu-item-border: 2px solid transparent;
          --menu-item-hover-border: 2px solid white;
          --menu-item-margin: ${pxToRem(8)} ${pxToRem(24)};
          ${aBgDark("brand90")}
          /* Buttons have the same background as the menu */
          --button-background: var(--brand90);
        `
      : css`
          --menu-align-items: stretch;
          --menu-item-border: 0;
          --menu-item-border-hover: 0;
          --menu-item-hover-background: var(--brand100);
          --menu-item-padding: ${pxToRem(8)} ${pxToRem(24)};
          ${aBgLight("brand10")}
          /* Buttons have the same background as the menu */
          --button-background: var(--brand10);
        `}

  display: flex;
  align-items: var(--menu-align-items);
  flex-direction: column;
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(16)} 0;
  color: var(--accent-light);
  transition: opacity 0.15s ease-out;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);
  margin-block-start: ${pxToRem(4)};
`;

interface StyledMenuProps {
  isMainNav?: boolean;
}

export const Item = styled(MenuItem)`
  transition: var(--color-transition), var(--background-transition);
  margin: var(--menu-item-margin, 0);
  border-bottom: var(--menu-item-border, 0);
  padding: var(--menu-item-padding, 0);
  text-align: start;
  color: var(--accent-light);
  ${tLabel("md")}

  &:focus {
    outline: 0;
  }

  &:hover,
  &:focus-visible:not(:hover) {
    color: var(--neutral00);
    border-bottom: var(--menu-item-hover-border, 0);
    background: var(--menu-item-hover-background, none);
  }
`;
