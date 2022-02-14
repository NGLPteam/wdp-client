import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./LoadingSpinner.styles";

const LoadingSpinner = ({ className, label }: Props) => {
  const { t } = useTranslation();

  return (
    <Styled.Icon className={className}>
      <Styled.Label className="a-hidden">
        {t(label || "common.loading")}
      </Styled.Label>
    </Styled.Icon>
  );
};

interface Props {
  label?: string;
  className?: string;
}

export default LoadingSpinner;
