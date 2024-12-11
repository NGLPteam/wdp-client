import classNames from "classnames";
import styles from "./DotList.module.css";
import type { ComponentProps } from "react";

type Props = ComponentProps<"ul">;

export default function DotList({ children, className, ...props }: Props) {
  return (
    <ul className={classNames(styles.list, className)} {...props}>
      {children}
    </ul>
  );
}
