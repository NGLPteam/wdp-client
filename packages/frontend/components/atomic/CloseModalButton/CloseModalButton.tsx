import React from "react";
import { useTranslation } from "react-i18next";
import { IconFactory } from "components/factories";
import * as Styled from "./CloseModalButton.styles";

export default function MobileMenuToggle({
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { t } = useTranslation();

  return (
    <Styled.Toggle {...props}>
      <Styled.Label className="t-label-lg">{t("common.close")}</Styled.Label>
      <IconFactory icon="close24" role="presentation" />
    </Styled.Toggle>
  );
}
