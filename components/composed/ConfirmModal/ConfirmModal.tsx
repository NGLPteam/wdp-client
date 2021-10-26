import { ButtonControlConfirm } from "components/atomic";
import i18next from "i18next";
import * as Styled from "./ConfirmModal.styles";

type ButtonControlConfirmProps = React.ComponentProps<
  typeof ButtonControlConfirm
>;

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

type ConfirmModalProps = Pick<
  ButtonControlConfirmProps,
  "modalBody" | "onClick"
> & {
  handleClose: () => void;
  actionLabel?: ButtonControlConfirmProps["aria-label"];
};

export default ConfirmModal;
