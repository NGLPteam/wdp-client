import React from "react";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../LoadingSpinner";
import * as Styled from "./LoadingPage.styles";

interface Props {
  label?: string;
}

export default function LoadingPage({ label }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper
      aria-live="polite"
      aria-busy="true"
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
      aria-valuetext={t(label || "common.loading")}
    >
      <LoadingSpinner label={label} />
    </Styled.Wrapper>
  );
}
