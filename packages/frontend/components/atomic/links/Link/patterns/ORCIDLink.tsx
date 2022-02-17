import React from "react";
import Link from "..";

type BaseProps = React.ComponentProps<typeof Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ORCIDLink({ children, ...props }: BaseProps) {
  return children ? (
    <Link {...props} target="_blank" icon="orcid" iconLeft>
      {children}
    </Link>
  ) : null;
}
