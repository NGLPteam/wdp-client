import React, { forwardRef } from "react";
import { ButtonControl } from "components/atomic";
import { useDialogState } from "reakit/Dialog";
import Modal from "components/layout/Modal";
import ConfirmModalBody from "components/composed/ConfirmModalBody";

type BaseProps = React.ComponentProps<typeof ButtonControl>;
type ModalProps = React.ComponentProps<typeof Modal>;

/**
 * A button control that opens a modal
 */
const ButtonControlConfirm = forwardRef(
  (
    {
      modalLabel,
      modalBody,
      icon,
      children,
      onClick,
      "aria-label": actionLabel,
      onOpenModal: closeDropdown,
    }: Props,
    ref
  ) => {
    const dialog = useDialogState({ visible: false, animated: true });

    return (
      <>
        <ButtonControl
          as="a"
          icon={icon}
          ref={ref}
          onClick={(e) => {
            if (closeDropdown) {
              closeDropdown(e);
            }
            dialog.show();
          }}
        >
          {children}
        </ButtonControl>
        <Modal label={modalLabel} dialog={dialog}>
          {({ handleClose }) => (
            <ConfirmModalBody
              modalBody={modalBody}
              onClick={onClick}
              handleClose={handleClose}
              actionLabel={actionLabel}
            />
          )}
        </Modal>
      </>
    );
  }
);

interface Props extends BaseProps {
  modalLabel?: ModalProps["label"];
  modalBody?: React.ReactNode;
  onOpenModal?: (e: React.MouseEvent) => void;
}

export default ButtonControlConfirm;
