import { HTMLAttributes, useCallback } from "react";
import { useTranslation } from "react-i18next";
import IconFactory from "components/factories/IconFactory";
import { useDialogContext } from "../context";
import * as Styled from "./Content.styles";

export default function Dialog({
  children,
  className,
  ...restProps
}: React.PropsWithChildren & HTMLAttributes<HTMLDialogElement>) {
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
          <button onClick={handleToggleClick}>
            <span className="t-label-sm">{t("common.close")}</span>
            <IconFactory icon="close" />
          </button>
        </Styled.ButtonWrapper>
        <Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
      </Styled.Pane>
    </Styled.Dialog>
  );
}
