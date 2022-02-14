import styled, { css } from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { noInsetSupport } from "@wdp/lib/theme/mixins";
import { reducedMotion } from "@castiron/style-mixins";
import { Dialog as BaseDialog } from "reakit/Dialog";
import { slideDrawerIn, slideDrawerOut } from "theme/base/animations";

export const Wrapper = styled(BaseDialog)`
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

  &[data-leave] {
    animation: ${slideDrawerOut} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;

    ${reducedMotion(`
      animation-duration: 0s;
    `)}
  }

  &[data-enter] {
    animation: ${slideDrawerIn} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;

    ${reducedMotion(`
      animation-duration: 0s;
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
  padding-inline-start: var(--container-v-padding-sm);
  padding-inline-end: var(--container-v-padding-sm);
`;

export const Content = styled.div`
  height: 100%;
  padding-inline-start: var(--container-v-padding-sm);
  padding-inline-end: var(--container-v-padding-sm);
`;

export const Inner = styled.div`
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block-start: ${pxToRem(30)};
  padding-block-end: ${pxToRem(33)};
`;
