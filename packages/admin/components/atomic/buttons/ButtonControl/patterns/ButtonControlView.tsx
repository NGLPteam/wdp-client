import React, { forwardRef } from "react";
import { ButtonControl } from "components/atomic";
type BaseProps = React.ComponentProps<typeof ButtonControl>;

/**
 * A button control that opens a drawer
 */
const ButtonControlView = forwardRef(({ children, ...props }: Props, ref) => {
  return (
    <ButtonControl
      as="a"
      icon="linkExternal"
      ref={ref}
      target="_blank"
      {...props}
    >
      {children}
    </ButtonControl>
  );
});

interface Props extends Omit<BaseProps, "icon" | "iconRotate"> {
  target?: "_blank" | "_self";
  href: string;
}

export default ButtonControlView;
