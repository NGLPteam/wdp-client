import classNames from "classnames";
import styles from "./Label.module.css";
import type { PropsWithChildren } from "react";

export default function Label({
  children,
  className,
  as,
  ...props
}: PropsWithChildren & {
  className?: string;
  htmlFor?: string;
  as?: "legend";
}) {
  const Tag = as ?? "label";

  return (
    <Tag className={classNames(styles.label, className)} {...props}>
      {children}
    </Tag>
  );
}
