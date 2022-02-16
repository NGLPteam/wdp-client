import React, { forwardRef } from "react";
import { MaybeButtonOrLinkRef } from "@castiron/common-types";
import * as Styled from "./NavMenuLink.styles";
import { IconFactory } from "components/factories";

type IconProps = React.ComponentProps<typeof IconFactory>;

type BaseProps = React.ComponentProps<typeof Styled.Link>;

function NavMenuLink(
  { children, as = "a", className, icon, ...props }: Props & BaseProps,
  ref: MaybeButtonOrLinkRef
) {
  const Tag = as;

  return (
    <Styled.Link as={Tag} className={className} ref={ref} {...props}>
      <span>{children}</span>
      {icon && <IconFactory icon={icon} />}
    </Styled.Link>
  );
}

export default forwardRef(NavMenuLink);

interface Props {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  className?: string;
  icon?: IconProps["icon"];
}
