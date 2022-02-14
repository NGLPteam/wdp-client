import React, { forwardRef, Ref } from "react";
import { MaybeLinkRef } from "@wdp/lib/types/ref";
import * as Styled from "./Link.styles";
import { IconFactory } from "components/factories";

type IconProps = React.ComponentProps<typeof IconFactory>;
type LinkProps = React.ComponentProps<typeof Styled.Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
function Link(
  { children, icon, ...props }: Props & LinkProps,
  ref: MaybeLinkRef | Ref<HTMLSpanElement>
) {
  return children ? (
    <Styled.Link ref={ref} {...props}>
      <Styled.LinkText>{children}</Styled.LinkText>
      {icon && <Styled.IconFactory icon={icon} role="presentation" />}
    </Styled.Link>
  ) : null;
}

interface Props {
  icon?: IconProps["icon"];
}

export default forwardRef(Link);
