import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./LoadingSpinner.styles";

const LoadingSpinner = ({ className }: Props) => {
  const { t } = useTranslation();

  return <Styled.Icon className={className} title={t("common.loading")} />;
};

interface Props {
  label?: string;
  className?: string;
}

export default LoadingSpinner;
