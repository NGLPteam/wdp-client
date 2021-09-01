import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./ProgressBar.styles";

export default function ProgressBar({ active, percentUploaded }: BarProps) {
  const { t } = useTranslation();

  if (!active) {
    return null;
  }

  if (!percentUploaded) {
    return null;
  }

  return (
    <Styled.Bar
      role="progressbar"
      aria-valuenow={percentUploaded}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${Math.floor(percentUploaded)}%`}
      aria-label={t("loading")}
    >
      <Styled.Percent style={{ width: `${percentUploaded}%` }}>
        <span className="a-hidden">{Math.floor(percentUploaded)}%</span>
      </Styled.Percent>
    </Styled.Bar>
  );
}

interface BarProps {
  active: boolean;
  percentUploaded: number | null;
}
