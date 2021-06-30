import styled from "styled-components";
import { basePadding, aTextGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";

export const Wrapper = styled.div`
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  z-index: -1;
  opacity: 0;
  border-radius: ${pxToRem("4px")};
  padding: ${basePadding(4)} 0;
  background-color: var(--brand10);
  color: var(--brand90);
  transition: opacity 0.15s ease-out;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);

  > * {
    display: block;
    padding: ${basePadding(2)} ${basePadding(6)};
    ${tLabel("sm")}
    color: var(--brand100);
    transition: var(--color-transition), var(--background-transition);

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
  }

  [aria-expanded="true"] + & {
    opacity: 1;
    z-index: 1;
  }
`;
