import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { MaybeButtonRef } from "@wdp/lib/types/ref";
import * as Styled from "./MobileMenuToggle.styles";
import { IconFactory } from "components/factories";

function MobileMenuToggle({ ...props }, ref: MaybeButtonRef) {
  const { t } = useTranslation();

  return (
    <Styled.Toggle ref={ref} {...props}>
      <Styled.Label className="t-label-lg">{t("nav.menu")}</Styled.Label>
      <IconFactory icon="hamburger24" role="presentation" />
    </Styled.Toggle>
  );
}

export default forwardRef(MobileMenuToggle);
