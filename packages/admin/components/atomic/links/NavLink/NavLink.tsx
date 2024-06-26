import React, { forwardRef } from "react";
import * as Styled from "./NavLink.styles";
import type { MaybeLinkRef } from "@castiron/common-types";

type BaseProps = React.ComponentProps<typeof Styled.Link>;

function NavLink(
  { children, active, ...props }: Props & BaseProps,
  ref: MaybeLinkRef,
) {
  return (
    <Styled.Link ref={ref} $active={active} {...props}>
      <Styled.LinkText>{children}</Styled.LinkText>
    </Styled.Link>
  );
}

interface Props {
  children?: React.ReactNode;
  active?: boolean;
  as?: "button" | "span";
}

export default forwardRef(NavLink);
