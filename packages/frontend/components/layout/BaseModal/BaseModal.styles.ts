import styled from "styled-components";
import {
  Dialog as BaseDialog,
  DialogBackdrop as BaseDialogBackdrop,
} from "reakit/Dialog";
import { noInsetSupport } from "@wdp/lib/theme/mixins";
import { borderRadius } from "theme/base/variables";

export const Backdrop = styled(BaseDialogBackdrop)`
  position: fixed;
  /* Center align short modals on the x-axis */
  display: flex;
  align-items: center;
  inset-block: 0;
  inset-inline: 0;
  z-index: var(--z-index-drawer-backdrop);
  background: rgba(0, 0, 0, 0.7);

  ${noInsetSupport(`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `)}
`;

export const Wrapper = styled.div`
  position: absolute;
  inset-inline-start: 50%;
  transform: translateX(-50%);
  z-index: var(--z-index-drawer);
  /* Center align modals on the y-axis */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  padding: var(--padding-sm);
  /* Scrolling should happen inside this container */
  overflow: auto;
  /* Padding so modal doesn't bump up against browser window */
`;

export const Modal = styled(BaseDialog)`
  display: flex;
  flex-direction: column;
  background: var(--color-base-neutral00);
  border: 1px solid var(--color-base-neutral40);
  border-radius: ${borderRadius.md};
`;

export const Header = styled.header`
  flex: 0 auto;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding-block-end: var(--modal-padding-inline);
  padding-inline-start: var(--modal-padding-inline);
  padding-inline-end: var(--modal-padding-inline);
`;

export const Footer = styled.footer`
  flex: 0 auto;
`;
