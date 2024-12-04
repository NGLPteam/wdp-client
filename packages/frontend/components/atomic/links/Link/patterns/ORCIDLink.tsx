import * as React from "react";
import classNames from "classnames";
import Link from "next/link";
import IconFactory from "@/components/factories/IconFactory";
import styles from "../Link.module.css";

type Props = React.ComponentProps<typeof Link> & { className?: string };

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ORCIDLink({ children, className, ...props }: Props) {
  return children ? (
    <Link
      className={classNames(styles.orcid, className)}
      target="_blank"
      {...props}
    >
      <IconFactory className={styles.icon} icon="orcid" role="presentation" />
      <span className={styles.linkText}>{children}</span>
    </Link>
  ) : null;
}
