"use client";

import { useTranslation } from "react-i18next";
import { useProgressBarContext } from "@/lib/vendor/react-transition-progress";
import styles from "./ProgressBar.module.css";

/* Exported progress bar - determines if bar should show and if auto progress should be used */
const ProgressBar = ({ label }: Props) => {
  // By rendering a placeholder even when content isn't loading, we avoid a 4 pixel jump
  // when the placeholder disappears.
  const progress = useProgressBarContext();

  return !progress.loading ? (
    <></>
  ) : (
    <BaseProgressBar label={label} percentLoaded={progress.percent} />
  );
};

/* Base progress bar layout and styling */
const BaseProgressBar = ({ label, percentLoaded }: Props) => {
  const { t } = useTranslation();
  const percent = percentLoaded ? Math.floor(percentLoaded) : 0;

  return (
    <div
      className={styles.bar}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${percent}%`}
      aria-label={t(label || "loading")}
    >
      <span className={styles.percent} style={{ width: `${percent}%` }}>
        <span className="sr-only">{percent}%</span>
      </span>
    </div>
  );
};

interface Props {
  label?: string;
  loading?: boolean;
  percentLoaded?: number | null;
}

export default ProgressBar;
