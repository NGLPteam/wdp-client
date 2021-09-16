import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./LoadingCircle.styles";

const LoadingCircle = ({ label }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Styled.Skeleton role="progressbar" aria-label={t(label || "loading")}>
      <Styled.Circle></Styled.Circle>
    </Styled.Skeleton>
  );
};

interface Props {
  label?: string;
}

export default LoadingCircle;
