import React, { forwardRef } from "react";
import { MaybeButtonOrLinkRef } from "@wdp/lib/types/ref";
import * as Styled from "./Tab.styles";

type BaseProps = React.ComponentProps<typeof Styled.Tab>;

const Tab = (
  {
    active,
    children,
    size = "md",
    bottomBorder = false,
    as = "a",
    icon,
    ...props
  }: Props & BaseProps,
  ref: MaybeButtonOrLinkRef
) => {
  return (
    <Styled.Tab
      as={as}
      className={`t-label-${size}`}
      $active={active}
      $bottomBorder={bottomBorder}
      ref={ref}
      {...props}
    >
      {children}
    </Styled.Tab>
  );
};

interface Props {
  active?: boolean;
  children?: string | React.ReactNode;
  size?: "md" | "lg";
  bottomBorder?: boolean;
}

export default forwardRef(Tab);
