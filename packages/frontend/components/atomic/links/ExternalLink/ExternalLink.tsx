import React from "react";
import * as Styled from "./ExternalLink.styles";
import { IconFactory } from "components/factories";

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ExternalLink({ className, children, ...props }: Props) {
  return children ? (
    <Styled.Link className={`a-link ${className}`} target="_blank" {...props}>
      <span>{children}</span> <IconFactory icon="linkExternal" />
    </Styled.Link>
  ) : null;
}

interface Props {
  className?: string;
  children: React.ReactNode;
  href: string;
}
