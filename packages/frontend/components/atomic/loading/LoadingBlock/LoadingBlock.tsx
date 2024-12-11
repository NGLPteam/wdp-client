"use client";

import classNames from "classnames";
import LoadingSpinner from "../LoadingSpinner";
import styles from "./LoadingBlock.module.css";

export default function LoadingBlock({ className }: { className?: string }) {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <LoadingSpinner />
    </div>
  );
}
