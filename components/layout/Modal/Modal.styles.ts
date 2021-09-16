import styled from "styled-components";
import { noInsetSupport } from "theme/mixins/base";
import {
  Dialog as BaseDialog,
  DialogBackdrop as BaseDialogBackdrop,
} from "reakit/Dialog";
import { aBgLight, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

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

export const Modal = styled(BaseDialog)`
  --drawer-padding-inline: ${basePadding(12)};
  position: fixed;
  top: 10px;
  left: 40vw;
  display: flex;
  flex-direction: column;
  width: ${pxToRem(300)};
  height: 200px;
  overflow: auto;
  border: 1px solid var(--neutral10);
  z-index: var(--z-index-drawer);
  ${aBgLight()}
`;
