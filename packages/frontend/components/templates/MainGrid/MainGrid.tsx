import styles from "./MainGrid.module.css";
import type { PropsWithChildren } from "react";

export default function MainLayoutGrid({ children }: PropsWithChildren) {
  return <div className={styles.grid}>{children}</div>;
}
