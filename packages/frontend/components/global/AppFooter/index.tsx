import React from "react";
import { useTranslation } from "react-i18next";

function AppFooter() {
  const { t } = useTranslation();

  return <footer>{t("app.copyright")}</footer>;
}

export default AppFooter;
