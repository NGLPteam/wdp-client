import styled, { css, keyframes } from "styled-components";
import {
  Dialog as BaseDialog,
  DialogBackdrop as BaseDialogBackdrop,
} from "reakit/Dialog";
import { aBgLight, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { reducedMotion } from "@castiron/style-mixins";
import { noInsetSupport } from "theme/mixins/base";

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

export const DialogBackdrop = styled(BaseDialogBackdrop)`
  position: fixed;
  background: var(--dialog-backdrop-background);
  transition: opacity 0.1s var(--base-timing);
  opacity: 0;
  inset-block: 0;
  inset-inline: 0;
  z-index: var(--z-index-drawer-backdrop);

  ${noInsetSupport(`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `)}

  &[data-enter] {
    opacity: 1;
  }
`;

export const Dialog = styled(BaseDialog)`
  --drawer-padding-inline: ${basePadding(12)};
  position: fixed;
  display: flex;
  flex-direction: column;
  inset-block: 0; /* TODO: determine top by header height */
  inset-inline-end: 0;
  width: 100vw;
  max-width: 640px;
  overflow: auto;
  border: 1px solid var(--neutral10);
  transform: translateX(100%);
  z-index: var(--z-index-drawer);
  ${aBgLight()}

  ${reducedMotion(css`
    transform: translateX(0);
  `)}

  ${noInsetSupport(`
    top: 0;  
    right: 0;
    bottom: 0;
  `)}

  &[data-enter] {
    animation: ${slideIn} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;
  }

  &[data-leave] {
    animation: ${slideOut} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;
  }
`;

export const Header = styled.header`
  padding-block-start: ${basePadding(11)};
  padding-inline-start: var(--drawer-padding-inline);
  padding-inline-end: var(--drawer-padding-inline);
  background: var(--background-color);
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: var(--accent-color);
  padding-block-end: ${basePadding(10)};
`;

export const H1 = styled.h1``;

export const HeaderButtons = styled.div`
  padding-block-start: ${basePadding(4)};
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding: var(--drawer-padding-inline);
`;

export const Footer = styled.footer`
  position: relative;
  background: var(--background-color);
  padding-block-start: ${pxToRem("30px")};
  padding-block-end: ${basePadding(11)};
  padding-inline-start: var(--drawer-padding-inline);
  padding-inline-end: var(--drawer-padding-inline);

  &:before {
    position: absolute;
    display: block;
    content: "";
    border-top: 1px solid var(--border-color);
    inset-block-start: 0;
    inset-inline: var(--drawer-padding-inline);

    ${noInsetSupport(`
      top: 0;
      right: var(--drawer-padding-inline);
      left: var(--drawer-padding-inline);
    `)}
  }
`;
