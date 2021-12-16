import styled, { css } from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { noInsetSupport } from "@wdp/lib/theme/mixins";
import { reducedMotion } from "@castiron/style-mixins";
import { slideDrawerIn, slideDrawerOut } from "theme/base/animations";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  z-index: 1000;
  inset-block: 0;
  inset-inline-end: 0;
  transform: translateX(100%);

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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  padding-inline-start: ${pxToRem(20)};
  padding-inline-end: var(--padding-md);
`;

export const Content = styled.div``;

export const Inner = styled.div``;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block-start: ${pxToRem(30)};
  padding-block-end: ${pxToRem(33)};
`;
