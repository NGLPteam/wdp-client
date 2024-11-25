import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

export default function MetadataLabel({ children }: PropsWithChildren) {
  return <dt className={styles.metadataLabel}>{children}</dt>;
}
