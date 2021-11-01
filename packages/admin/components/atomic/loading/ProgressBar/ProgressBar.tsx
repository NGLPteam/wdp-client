import React from "react";
import { useTranslation } from "react-i18next";
import { useAutoProgress } from "hooks";
import isNumber from "lodash/isNumber";
import * as Styled from "./ProgressBar.styles";

/* Exported progress bar - determines if bar should show and if auto progress should be used */
const ProgressBar = ({ label, loading = false, percentLoaded }: Props) => {
  // By rendering a placeholder even when content isn't loading, we avoid a 4 pixel jump
  // when the placeholder disappears.

  return !loading ? (
    <Styled.Placeholder />
  ) : isNumber(percentLoaded) ? (
    <BaseProgressBar label={label} percentLoaded={percentLoaded} />
  ) : (
    <AutoProgressBar label={label} />
  );
};

/* Progress bar with auto load */
const AutoProgressBar = ({ label }: Props) => {
  const percentLoaded = useAutoProgress();

  return <BaseProgressBar label={label} percentLoaded={percentLoaded} />;
};

/* Base progress bar layout and styling */
const BaseProgressBar = ({ label, percentLoaded }: Props) => {
  const { t } = useTranslation();
  const percent = percentLoaded ? Math.floor(percentLoaded) : 0;

  return (
    <Styled.Bar
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${percent}%`}
      aria-label={t(label || "loading")}
    >
      <Styled.Percent style={{ width: `${percent}%` }}>
        <span className="a-hidden">{percent}%</span>
      </Styled.Percent>
    </Styled.Bar>
  );
};

interface Props {
  label?: string;
  loading?: boolean;
  percentLoaded?: number | null;
}

export default ProgressBar;
