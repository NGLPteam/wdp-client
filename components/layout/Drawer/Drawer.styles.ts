import styled from "styled-components";
import {
  Dialog as BaseDialog,
  DialogBackdrop as BaseDialogBackdrop,
} from "reakit/Dialog";
import { aBgLight, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const DialogBackdrop = styled(BaseDialogBackdrop)`
  position: fixed;
  background: var(--dialog-backdrop-background);
  transition: var(--opacity-transition);
  opacity: 0;
  inset-block: 0;
  inset-inline: 0;
  z-index: var(--z-index-drawer-backdrop);

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
  transition: transform var(--base-duration) var(--base-timing);
  z-index: var(--z-index-drawer);
  ${aBgLight()}

  &[data-enter] {
    transform: translateX(0);
  }
`;

export const Header = styled.header`
  padding-block-start: ${basePadding(11)};
  padding-inline: var(--drawer-padding-inline);
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
  padding-block: ${pxToRem("30px")} ${basePadding(11)};
  padding-inline: var(--drawer-padding-inline);

  &:before {
    position: absolute;
    display: block;
    content: "";
    border-top: 1px solid var(--neutral40);
    inset-block-start: 0;
    inset-inline: var(--drawer-padding-inline);
  }
`;
