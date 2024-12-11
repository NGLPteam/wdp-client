"use client";

import LoadingSpinner from "../LoadingSpinner";
import styles from "./LoadingPage.module.css";

export default function LoadingPage() {
  return (
    <div className={styles.wrapper}>
      <LoadingSpinner />
    </div>
  );
}
