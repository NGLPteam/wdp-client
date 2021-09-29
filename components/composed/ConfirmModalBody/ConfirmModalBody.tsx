import * as Styled from "./ConfirmModalBody.styles";
import { ButtonControlConfirm } from "components/atomic";

type ButtonControlConfirmProps = React.ComponentProps<
  typeof ButtonControlConfirm
>;

const ConfirmModalBody = ({
  modalBody: body,
  handleClose,
  onClick: onConfirm,
  actionLabel,
}: ConfirmModalBodyProps) => {
  return (
    <>
      <p className="t-copy-sm">{body}</p>
      <Styled.ButtonWrapper>
        <Styled.ConfirmButton onClick={onConfirm}>
          {actionLabel ?? "Confirm"}
        </Styled.ConfirmButton>
        <Styled.ConfirmButton secondary onClick={handleClose}>
          Cancel
        </Styled.ConfirmButton>
      </Styled.ButtonWrapper>
    </>
  );
};

type ConfirmModalBodyProps = Pick<
  ButtonControlConfirmProps,
  "modalBody" | "onClick"
> & {
  handleClose: () => void;
  actionLabel?: ButtonControlConfirmProps["aria-label"];
};

export default ConfirmModalBody;
