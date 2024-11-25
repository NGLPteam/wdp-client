import * as React from "react";
import Link from "next/link";
import IconFactory from "@/components/factories/IconFactory";
import styles from "../Link.module.css";

type Props = React.ComponentProps<typeof Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ORCIDLink({ children, ...props }: Props) {
  return children ? (
    <Link className={styles.orcid} target="_blank" {...props}>
      <IconFactory className={styles.icon} icon="orcid" role="presentation" />
      <span className={styles.linkText}>{children}</span>
    </Link>
  ) : null;
}
