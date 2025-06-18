import { HTMLAttributes, useCallback } from "react";
import { useTranslation } from "react-i18next";
import IconFactory from "components/factories/IconFactory";
import { useDialogContext } from "../context";
import * as Styled from "./Content.styles";

type Props = Omit<HTMLAttributes<HTMLDialogElement>, "children"> & {
  button?: (
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
  ) => React.ReactNode;
  children:
    | React.ReactNode
    | ((
        onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
      ) => React.ReactNode | React.JSX.Element);
};

export default function Dialog({
  children,
  className,
  button,
  ...restProps
}: Props) {
  const { dialogRef, onToggleClick } = useDialogContext();

  const { t } = useTranslation();

  const handleToggleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onToggleClick();
    },
    [onToggleClick],
  );

  return (
    <Styled.Dialog ref={dialogRef} className={className} {...restProps}>
      <Styled.Pane>
        <Styled.ButtonWrapper>
          {button ? (
            button(handleToggleClick)
          ) : (
            <button className="dialog-close" onClick={handleToggleClick}>
              <span className="t-label-sm">{t("common.close")}</span>
              <IconFactory icon="close" />
            </button>
          )}
        </Styled.ButtonWrapper>
        <Styled.ChildrenWrapper>
          {typeof children === "function"
            ? children(handleToggleClick)
            : children}
        </Styled.ChildrenWrapper>
      </Styled.Pane>
    </Styled.Dialog>
  );
}
