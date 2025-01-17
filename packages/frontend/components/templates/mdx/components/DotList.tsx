import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

export default function DotList({
  children,
  display,
}: PropsWithChildren & { display: "present" | "empty" }) {
  return display === "present" ? (
    <ul className={styles.dotList}>{children}</ul>
  ) : null;
}
