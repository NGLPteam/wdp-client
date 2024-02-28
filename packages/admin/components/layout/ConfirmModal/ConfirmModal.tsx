import i18next from "i18next";
import { ButtonControlConfirm, Button } from "components/atomic";
import * as Styled from "./ConfirmModal.styles";

type ButtonControlConfirmProps = React.ComponentProps<
  typeof ButtonControlConfirm
>;

// ConfirmButton extends Button, so we need to define our onClick
// handler type to match Button
type ButtonProps = React.ComponentProps<typeof Button>;

const ConfirmModal = ({
  modalBody: body,
  handleClose,
  onClick: onConfirm,
  actionLabel,
}: ConfirmModalProps) => {
  return (
    <>
      {body}
      <Styled.ButtonWrapper>
        <Styled.ConfirmButton onClick={onConfirm}>
          {actionLabel ?? i18next.t("common.confirm")}
        </Styled.ConfirmButton>
        <Styled.ConfirmButton secondary onClick={handleClose}>
          {i18next.t("common.cancel")}
        </Styled.ConfirmButton>
      </Styled.ButtonWrapper>
    </>
  );
};

type ConfirmModalProps = Pick<ButtonControlConfirmProps, "modalBody"> &
  Pick<ButtonProps, "onClick"> & {
    handleClose: () => void;
    actionLabel?: ButtonControlConfirmProps["aria-label"];
  };

export default ConfirmModal;
