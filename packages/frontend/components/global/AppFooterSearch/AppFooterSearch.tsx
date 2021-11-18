import React from "react";
import { useTranslation } from "react-i18next";
import { IconFactory } from "../../factories";

export default function AppFooterSearch({ placeholder = "search.label" }) {
  const { t } = useTranslation();

  return (
    <div className="a-button-secondary-sm l-flex l-flex--gap l-flex--align-center">
      <IconFactory icon="search" />
      <span className="t-copy-lighter">{t(placeholder)}</span>
    </div>
  );
}
