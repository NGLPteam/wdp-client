import React from "react";
import { IconFactory } from "components/factories";

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ExternalLink({
  className = "t-copy",
  children,
  ...props
}: Props) {
  return children ? (
    <a className={className} target="_blank" {...props}>
      <span>{children}</span> <IconFactory icon="linkExternal" />
    </a>
  ) : null;
}

interface Props {
  className?: string;
  children: React.ReactNode;
  href: string;
}
