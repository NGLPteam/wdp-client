import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

export default function MetadataItem({ children }: PropsWithChildren) {
  return <dd className={styles.metadataValue}>{children}</dd>;
}
