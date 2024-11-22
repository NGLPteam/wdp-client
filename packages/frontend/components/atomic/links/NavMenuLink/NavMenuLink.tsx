import React, { forwardRef } from "react";
import { MaybeButtonOrLinkRef } from "@castiron/common-types";
import { IconFactory } from "components/factories";
import * as Styled from "./NavMenuLink.styles";
import type { LinkProps } from "./NavMenuLink.styles";

type IconProps = React.ComponentProps<typeof IconFactory>;

function NavMenuLink(
  { children, as, className, icon, ...props }: Props & LinkProps,
  ref: MaybeButtonOrLinkRef,
) {
  const isLink = !as || as === "a";

  return (
    <Styled.Link
      as={as}
      prefetch={isLink ? false : undefined}
      className={className}
      ref={ref}
      {...props}
    >
      <span>{children}</span>
      {icon && <IconFactory icon={icon} />}
    </Styled.Link>
  );
}

export default forwardRef(NavMenuLink);

interface Props {
  children: React.ReactNode;
  as?: "a" | "span" | "div" | "button";
  className?: string;
  icon?: IconProps["icon"];
}
