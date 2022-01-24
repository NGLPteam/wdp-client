import React, { forwardRef } from "react";
import type { MaybeButtonOrLinkRef } from "@wdp/lib/types/ref";
import * as Styled from "./NavLink.styles";

type BaseProps = React.ComponentProps<typeof Styled.Link>;

function NavLink(
  { children, active, ...props }: Props & BaseProps,
  ref: MaybeButtonOrLinkRef
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
}

export default forwardRef(NavLink);
