import React, { forwardRef } from "react";
import { ButtonControl, ButtonControlGroup } from "components/atomic";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import Modal from "components/layout/Modal";
import ConfirmModal from "components/composed/ConfirmModal";

type BaseProps = React.ComponentProps<typeof ButtonControl>;
type ModalProps = React.ComponentProps<typeof Modal>;
type GroupProps = React.ComponentProps<typeof ButtonControlGroup>;

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
      closeDropdown,
    }: Props,
    ref
  ) => {
    const dialog = useDialogState({ visible: false, animated: true });

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (closeDropdown) {
        closeDropdown();
      }
      dialog.show();
    };

    return (
      <>
        <DialogDisclosure
          as={ButtonControl}
          icon={icon}
          ref={ref}
          {...dialog}
          onClick={handleClick}
          aria-label={actionLabel}
        >
          {children}
        </DialogDisclosure>
        <Modal label={modalLabel} dialog={dialog} hideOnClickOutside={false}>
          {({ handleClose }) => (
            <ConfirmModal
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

type Props = Pick<GroupProps, "breakpoint"> &
  BaseProps & { modalLabel?: ModalProps["label"]; modalBody?: React.ReactNode };

export default ButtonControlConfirm;
