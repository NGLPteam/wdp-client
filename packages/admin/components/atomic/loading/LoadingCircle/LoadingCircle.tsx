import React from "react";
import { useTranslation } from "react-i18next";
import LoadingCircleIcon from "../LoadingCircleIcon";
import * as Styled from "./LoadingCircle.styles";

const LoadingCircle = ({ label, className }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Styled.Skeleton
      role="progressbar"
      aria-label={t(label || "loading")}
      noShimmer
      className={className}
    >
      <LoadingCircleIcon />
    </Styled.Skeleton>
  );
};

interface Props {
  label?: string;
  className?: string;
}

export default LoadingCircle;
