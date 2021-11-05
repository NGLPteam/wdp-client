import styled, { css } from "styled-components";
import { reducedMotion } from "@castiron/style-mixins";
import { pxToRem } from "theme/mixins/functions";
import {
  fluidScale,
  noFlexGapSupport,
  noInsetSupport,
  respond,
} from "theme/mixins/base";
import { slideDrawerIn, slideDrawerOut } from "theme/base/animations";

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
    animation: ${slideDrawerOut} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;

    ${reducedMotion(`
      animation: none;
    `)}
  }

  &[data-enter="true"] {
    animation: ${slideDrawerIn} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;

    ${reducedMotion(`
      animation: none;
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
  padding-inline-start: ${pxToRem(16)};
  padding-inline-end: ${pxToRem(16)};
  padding-block-start: ${pxToRem(20)};
  padding-block-end: ${pxToRem(20)};

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

export const Content = styled.div`
  padding-block-start: ${pxToRem(40)};
  padding-block-end: ${pxToRem(60)};
  padding-inline-start: ${fluidScale("60px", "16px", 20, 10)};
  padding-inline-end: ${fluidScale("60px", "16px", 20, 10)};
  flex: 1 0 auto;

  > * + * {
    padding-block-start: ${pxToRem(50)};
  }
`;

export const List = styled.ul`
  > * {
    padding-block-start: ${pxToRem(20)};
  }
`;
