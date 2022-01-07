import React from "react";
import { useTranslation } from "react-i18next";
import ArrowLink from "..";

export default function ReadMoreLink({ ...props }) {
  const { t } = useTranslation();

  return <ArrowLink {...props}>{t("common.read_more")}</ArrowLink>;
}
