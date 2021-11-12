import React from "react";
import { useTranslation } from "react-i18next";

function AppHeader() {
  const { t } = useTranslation();

  return <header>{t("app.installation_name")}</header>;
}

export default AppHeader;
