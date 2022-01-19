import React from "react";
import Link from "..";

type BaseProps = React.ComponentProps<typeof Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ExternalLink({ children, ...props }: BaseProps) {
  return children ? (
    <Link {...props} target="_blank" icon="linkExternal">
      {children}
    </Link>
  ) : null;
}
