import * as React from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import * as Styled from "./Modal.styles";
import { ButtonControl } from "components/atomic/buttons";

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
      <Styled.DialogWrapper>
        <Styled.Modal
          aria-labelledby={uidLabel}
          aria-describedby={uidDesc}
          hideOnClickOutside={hideOnClickOutside}
          {...dialog}
        >
          {label ? (
            <Styled.Header>
              <div className="t-label-md t-truncate" id={uidLabel}>
                {label}
              </div>
              <ButtonControl icon="close" iconRotate={0} onClick={handleClose}>
                {t("close")}
              </ButtonControl>
            </Styled.Header>
          ) : (
            <button className="a-hidden">{t("close")}</button>
          )}
          <Styled.Content $padTop={!label}>
            {typeof children === "function"
              ? children({ handleClose })
              : children}
          </Styled.Content>
        </Styled.Modal>
      </Styled.DialogWrapper>
    </Styled.DialogBackdrop>
  );
};

type RenderChildProps = {
  handleClose: () => void;
};

type RenderChild = (props: RenderChildProps) => JSX.Element;

interface Props {
  dialog: DialogProps;
  /** Modal label, displayed next to the close button */
  label?: string;
  /** Modal content */
  children?: RenderChild | React.ReactNode;
  /** If false, disables hiding on click outside the drawer */
  hideOnClickOutside?: boolean;
}

export default Modal;
