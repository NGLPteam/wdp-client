import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

export default function MetadataItem({
  children,
  display,
}: PropsWithChildren & { display: "present" | "empty" }) {
  return display === "present" ? (
    <dd className={styles.metadataValue}>{children}</dd>
  ) : null;
}
