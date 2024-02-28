import * as React from "react";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic/buttons";
import usePreventBodyScroll from "./hooks/usePreventBodyScroll";
import * as Styled from "./Modal.styles";
import type { DialogProps } from "reakit/Dialog";

const Modal = ({
  dialog,
  label,
  children,
  hideOnClickOutside = true,
}: Props) => {
  const uidLabel = useId();
  const uidDesc = useId();
  const { t } = useTranslation();

  usePreventBodyScroll(dialog.visible);

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
          preventBodyScroll={false}
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

type RenderChild = (props: RenderChildProps) => React.JSX.Element;

export interface Props {
  dialog: DialogProps;
  /** Modal label, displayed next to the close button */
  label?: string;
  /** Modal content */
  children?: RenderChild | React.ReactNode;
  /** If false, disables hiding on click outside the drawer */
  hideOnClickOutside?: boolean;
}

export default Modal;
