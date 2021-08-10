import styled, { css, keyframes } from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { reducedMotion } from "@castiron/style-mixins";
import {
  fluidScale,
  noFlexGapSupport,
  noInsetSupport,
  respond,
} from "theme/mixins/base";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  inset-block: 0; /* TODO: determine top by header height */
  inset-inline-end: 0;
  overflow: auto;
  width: 100vw;
  z-index: 1000;

  ${reducedMotion(css`
    opacity: 0;
    transition: var(--opacity-transition);
  `)}

  ${noInsetSupport(`
    top: 0;
    right: 0;
    bottom: 0;
  `)}

  &[data-leave="true"] {
    animation: ${slideOut} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;
  }

  &[data-enter="true"] {
    animation: ${slideIn} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;

    ${reducedMotion(`
      transform: translateX(0); 
      opacity: 1;
    `)}
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--grid-column-gap);
  padding-inline-start: ${basePadding(4)};
  padding-inline-end: ${basePadding(4)};
  padding-block-start: ${basePadding(5)};
  padding-block-end: ${basePadding(5)};

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: var(--grid-column-gap);
    }
  `)}
`;

export const SearchBlock = styled.div`
  margin-inline-end: auto;

  ${respond(`display: none;`, 60, "min")}
`;

export const NavBlock = styled.div<NavBlockProps>`
  padding-block-start: ${pxToRem(40)};
  padding-inline-start: ${fluidScale("60px", "16px", 20, 10)};
  padding-inline-end: ${fluidScale("60px", "16px", 20, 10)};

  /* :last-of-type doesn't work for classes, so we use a property instead */
  ${({ isLast }) =>
    isLast &&
    `
      flex: 1 0 auto;
      padding-block-end: ${pxToRem(60)};
    `}

  & + & {
    padding-block-start: ${pxToRem(50)};
  }
`;

interface NavBlockProps {
  isLast?: boolean;
}

export const List = styled.ul`
  > * {
    padding-block-start: ${basePadding(5)};
  }
`;
