import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./ProgressBar.styles";
import { useAutoProgress } from "hooks";

const ProgressBar = ({ label, loading = false }: Props) => {
  const { t } = useTranslation();
  const percentLoaded = useAutoProgress();

  // By rendering a placeholder even when content isn't loading, we avoid a 4 pixel jump
  // when the placeholder disappears.
  if (!loading) return <Styled.Placeholder />;

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
  loading?: boolean;
}

export default ProgressBar;
