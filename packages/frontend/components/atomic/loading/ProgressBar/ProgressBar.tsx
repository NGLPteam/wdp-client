"use client";

import { useTranslation } from "react-i18next";
import { useProgressBarContext } from "@/lib/vendor/react-transition-progress";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ label }: Props) => {
  // By rendering a placeholder even when content isn't loading, we avoid a 4 pixel jump
  // when the placeholder disappears.
  const progress = useProgressBarContext();

  return !progress.loading ? <></> : <BaseProgressBar label={label} />;
};

/* Base progress bar layout and styling */
const BaseProgressBar = ({ label }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.bar} aria-label={t(label || "loading")}>
      <span className={styles.progress} />
    </div>
  );
};

interface Props {
  label?: string;
}

export default ProgressBar;
