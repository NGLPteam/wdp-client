import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./ProgressBar.styles";
import { useAutoProgress } from "hooks";

const ProgressBar = ({ label }: Props) => {
  const { t } = useTranslation();
  const percentLoaded = useAutoProgress();

  return (
    <Styled.Bar
      role="progressbar"
      aria-valuenow={percentLoaded}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${Math.floor(percentLoaded)}%`}
      aria-label={t(label || "loading")}
    >
      <Styled.Percent style={{ width: `${percentLoaded}%` }}>
        <span className="a-hidden">{Math.floor(percentLoaded)}%</span>
      </Styled.Percent>
    </Styled.Bar>
  );
};

interface Props {
  label?: string;
}

export default ProgressBar;
