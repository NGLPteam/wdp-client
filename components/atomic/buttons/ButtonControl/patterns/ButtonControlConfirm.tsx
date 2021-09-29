import React, { forwardRef } from "react";
import { ButtonControl } from "components/atomic";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
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
    }: Props,
    ref
  ) => {
    const dialog = useDialogState({ visible: false, animated: true });

    return (
      <>
        <DialogDisclosure {...dialog}>
          <ButtonControl as="a" icon={icon} ref={ref}>
            {children}
          </ButtonControl>
        </DialogDisclosure>
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
  modalLabel: ModalProps["label"];
  modalBody?: string;
}

export default ButtonControlConfirm;
