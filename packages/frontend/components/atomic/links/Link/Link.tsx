import React, { forwardRef, Ref } from "react";
import { MaybeLinkRef } from "@castiron/common-types";
import { IconFactory } from "components/factories";
import * as Styled from "./Link.styles";

type IconProps = React.ComponentProps<typeof IconFactory>;
type LinkProps = React.ComponentProps<typeof Styled.Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
function Link(
  { children, icon, iconLeft, ...props }: Props & LinkProps,
  ref: MaybeLinkRef | Ref<HTMLAnchorElement>,
) {
  return children ? (
    <Styled.Link ref={ref} {...props}>
      {icon && iconLeft && (
        <Styled.IconFactory icon={icon} role="presentation" />
      )}
      <Styled.LinkText>{children}</Styled.LinkText>
      {icon && !iconLeft && (
        <Styled.IconFactory icon={icon} role="presentation" />
      )}
    </Styled.Link>
  ) : null;
}

interface Props {
  icon?: IconProps["icon"];
  iconLeft?: true;
  as?: "span" | "button";
  active?: boolean;
}

export default forwardRef(Link);
