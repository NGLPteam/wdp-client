import React, { forwardRef } from "react";
import * as Styled from "./Tab.styles";

type BaseProps = React.ComponentProps<typeof Styled.Tab>;

const Tab = (
  {
    active,
    children,
    size = "md",
    bottomBorder = false,
    as = "a",
    ...props
  }: Props & BaseProps,
  ref?: React.LegacyRef<HTMLAnchorElement>,
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
  as?: "a" | "button";
}

export default forwardRef(Tab);
