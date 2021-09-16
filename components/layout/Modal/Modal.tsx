import * as React from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic/buttons";
import * as Styled from "./Modal.styles";
import { DialogProps } from "reakit/Dialog";

const Modal = ({
  dialog,
  label,
  children,
  hideOnClickOutside = true,
}: Props) => {
  const uidLabel = useUID();
  const uidDesc = useUID();
  const { t } = useTranslation();

  const handleClose = () => {
    if (dialog && dialog.hide) dialog.hide();
  };

  return (
    <Styled.DialogBackdrop {...dialog}>
      <Styled.Modal
        aria-labelledby={uidLabel}
        aria-describedby={uidDesc}
        hideOnClickOutside={hideOnClickOutside}
        {...dialog}
      >
        <Styled.Header>
          <Styled.HeaderBar>
            <div className="t-label-md" id={uidLabel}>
              {label}
            </div>
            <ButtonControl icon="close" iconRotate={0} onClick={handleClose}>
              {t("close")}
            </ButtonControl>
          </Styled.HeaderBar>
        </Styled.Header>
        <Styled.Content>{dialog.visible && children}</Styled.Content>
      </Styled.Modal>
    </Styled.DialogBackdrop>
  );
};

interface Props {
  dialog: DialogProps;
  /** Modal label, displayed next to the close button */
  label: string;
  /** Modal content */
  children?: JSX.Element | string | null;
  /** If false, disables hiding on click outside the drawer */
  hideOnClickOutside: boolean;
}

export default Modal;
