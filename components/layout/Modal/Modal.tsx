import * as React from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic/buttons";
import * as Styled from "./Modal.styles";
import { DialogProps } from "reakit/Dialog";

const Modal = ({
  dialog,
  label,
  header,
  children,
  onClose,
  hideOnClickOutside = true,
}: Props) => {
  const uidLabel = useUID();
  const uidDesc = useUID();
  const { t } = useTranslation();

  const handleClose = () => {
    if (dialog && dialog.hide) dialog.hide();
    if (onClose) onClose();
  };

  return (
    <Styled.DialogBackdrop>
      <Styled.Modal
        aria-labelledby={uidLabel}
        aria-describedby={uidDesc}
        hideOnClickOutside={hideOnClickOutside}
      >
        {label}
        {header}
        <ButtonControl icon="close" iconRotate={0} onClick={handleClose}>
          {t("close")}
        </ButtonControl>
        {children}
      </Styled.Modal>
    </Styled.DialogBackdrop>
  );
};

interface Props {
  dialog: DialogProps;
  /** Drawer label, displayed next to the close button */
  label: string;
  /** Drawer header */
  header: string;
  /** Drawer content */
  children?: JSX.Element | string | null;
  /** Adds a Save button to the drawer footer. Function runs on save */
  onSave?: () => void;
  /** Function runs on close or cancel */
  onClose?: () => void;
  /** If false, disables hiding on click outside the drawer */
  hideOnClickOutside: boolean;
}

export default Modal;
