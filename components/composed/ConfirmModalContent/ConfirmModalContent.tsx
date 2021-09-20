import { Button } from "components/atomic/buttons";
import { useIsMobile } from "hooks";
import * as Styled from "./ConfirmModalContent.styles";

const ConfirmModal = ({ body, handleClose, onConfirm }: ConfirmModalProps) => {
  const isMobile = useIsMobile();

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  return (
    <>
      <p className="t-copy-sm">{body}</p>
      <Styled.ConfirmButtonWrapper isMobile={isMobile}>
        <Button onClick={handleConfirm}>Confirm</Button>
        <Button secondary onClick={handleClose}>
          Cancel
        </Button>
      </Styled.ConfirmButtonWrapper>
    </>
  );
};

interface ConfirmModalProps {
  body?: string;
  handleClose: () => void;
  onConfirm: React.MouseEventHandler | undefined;
}

export default ConfirmModal;
