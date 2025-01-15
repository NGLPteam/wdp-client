import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

export default function DotList({ children }: PropsWithChildren) {
  return <ul className={styles.dotList}>{children}</ul>;
}
