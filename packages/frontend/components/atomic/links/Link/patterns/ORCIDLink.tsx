import React from "react";
import * as Styled from "../Link.styles";

type Props = React.ComponentProps<typeof Styled.ORCIDLink>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ORCIDLink({ children, ...props }: Props) {
  return children ? (
    <Styled.ORCIDLink target="_blank" {...props}>
      <Styled.IconFactory icon="orcid" role="presentation" />
      <span>{children}</span>
    </Styled.ORCIDLink>
  ) : null;
}
