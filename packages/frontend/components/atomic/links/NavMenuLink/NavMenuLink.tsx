import React, { forwardRef, Ref } from "react";
import * as Styled from "./NavMenuLink.styles";
import { IconFactory } from "components/factories";
import { MaybeLinkRef } from "types/ref";

type IconProps = React.ComponentProps<typeof IconFactory>;

function NavMenuLink(
  { children, as = "a", className, icon, ...props }: Props,
  ref: MaybeLinkRef | Ref<HTMLSpanElement>
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
