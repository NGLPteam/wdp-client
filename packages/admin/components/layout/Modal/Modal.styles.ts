import styled from "styled-components";
import {
  Dialog as BaseDialog,
  DialogBackdrop as BaseDialogBackdrop,
} from "reakit/Dialog";
import { fluidScale, noInsetSupport, respond } from "theme/mixins/base";
import { aBgLight } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const DialogBackdrop = styled(BaseDialogBackdrop)`
  position: fixed;
  /* Center align short modals on the x-axis */
  display: flex;
  align-items: center;
  transition: opacity 0.1s var(--base-timing);
  opacity: 0;
  inset-block: 0;
  inset-inline: 0;
  z-index: var(--z-index-drawer-backdrop);
  background: var(--dialog-backdrop-background);

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

export const DialogWrapper = styled.div`
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
  /* Scrolling should happen inside this container */
  overflow: auto;
  /* Padding so modal doesn't bump up against browser window */
  padding-block-start: ${fluidScale("24px", "12px")};
  padding-block-end: ${fluidScale("24px", "12px")};
  padding-inline-start: ${fluidScale("24px", "12px")};
  padding-inline-end: ${fluidScale("24px", "12px")};
`;

export const Modal = styled(BaseDialog)`
  --modal-padding-inline: ${fluidScale("40px", "24px")};
  --form-grid-item-width: 100%;
  display: flex;
  flex-direction: column;
  width: ${pxToRem(497)};
  border: 1px solid var(--neutral10);
  border-radius: 6px;
  transition: opacity 0.1s var(--base-timing);
  ${aBgLight()}

  ${respond(`width: 100%;`, 50)}
`;

export const Header = styled.header`
  padding: var(--modal-padding-inline);
  background: var(--background-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--accent-color);
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding-block-end: var(--modal-padding-inline);
  padding-inline-start: var(--modal-padding-inline);
  padding-inline-end: var(--modal-padding-inline);
`;
