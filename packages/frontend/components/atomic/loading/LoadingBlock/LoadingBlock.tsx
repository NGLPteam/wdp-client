import React from "react";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../LoadingSpinner";
import * as Styled from "./LoadingBlock.styles";

export default function LoadingBlock({ className, label, style }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper
      className={className}
      style={style}
      aria-live="polite"
      aria-busy="true"
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
      aria-valuetext={label || t("common.loading")}
    >
      <LoadingSpinner label={label} />
    </Styled.Wrapper>
  );
}

interface Props {
  className?: string;
  label?: string;
  style?: React.CSSProperties;
}
