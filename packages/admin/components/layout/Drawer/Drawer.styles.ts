import styled, { css } from "styled-components";
import {
  Dialog as BaseDialog,
  DialogBackdrop as BaseDialogBackdrop,
} from "reakit/Dialog";
import { reducedMotion } from "@castiron/style-mixins";
import { aBgLight } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { noInsetSupport, noFlexGapSupport } from "theme/mixins/base";
import { slideDrawerIn, slideDrawerOut } from "theme/base/animations";

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
  --drawer-padding-inline: ${pxToRem(48)};
  --form-grid-item-width: 100%;
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
    animation: ${slideDrawerIn} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;

    ${reducedMotion(`animation: none;`)}
  }

  &[data-leave] {
    animation: ${slideDrawerOut} 0.3s cubic-bezier(0.61, 1, 0.88, 1) forwards;

    ${reducedMotion(`animation: none;`)}
  }
`;

export const Header = styled.header`
  padding-block-start: ${pxToRem(44)};
  padding-inline-start: var(--drawer-padding-inline);
  padding-inline-end: var(--drawer-padding-inline);
  background: var(--background-color);
`;

export const HeaderBar = styled.div<{ $noLabel: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $noLabel }) =>
    $noLabel ? "flex-end" : "space-between"};
  align-items: center;
  color: var(--accent-color);
  padding-block-end: ${pxToRem(40)};
`;

export const H1 = styled.h1``;

export const HeaderButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${pxToRem(10)};
  padding-block-start: ${pxToRem(16)};
  padding-inline-start: var(--drawer-padding-inline);
  padding-inline-end: var(--drawer-padding-inline);

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: ${pxToRem(10)};
    }
  `)}
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding: var(--drawer-padding-inline);
`;

export const Footer = styled.footer`
  position: relative;
  background: var(--background-color);
  padding-block-start: ${pxToRem(30)};
  padding-block-end: ${pxToRem(44)};
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
