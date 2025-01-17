import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

export default function MetadataLabel({
  children,
  display,
}: PropsWithChildren & { display: "present" | "empty" }) {
  return display === "present" ? (
    <dt className={styles.metadataLabel}>{children}</dt>
  ) : null;
}
