import styled from "styled-components";
import { basePadding, aTextGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { Menu as BaseMenu, MenuItem } from "reakit/Menu";

export const Menu = styled(BaseMenu)`
  border-radius: ${pxToRem("4px")};
  padding: ${basePadding(4)} 0;
  background-color: var(--brand10);
  color: var(--brand90);
  transition: opacity 0.15s ease-out;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);
`;

export const Item = styled(MenuItem)`
  display: block;
  width: 100%;
  padding: ${basePadding(2)} ${basePadding(6)};
  text-align: left;
  color: var(--brand100);
  transition: var(--color-transition), var(--background-transition);
  ${tLabel("sm")}

  &:hover {
    background-color: var(--brand100);
    color: var(--neutral00);
  }

  &:focus {
    outline: 0;
  }

  &:focus-visible:not(:hover) {
    ${aTextGlow("darkMode")}
  }
`;
