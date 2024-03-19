import React, { forwardRef } from "react";
import { ButtonControl } from "components/atomic";
type BaseProps = React.ComponentProps<typeof ButtonControl>;

/**
 * A button control that opens a drawer
 */
const ButtonControlDownload = forwardRef(
  ({ children, ...props }: Props, ref) => {
    return (
      <ButtonControl
        as="a"
        icon="arrow"
        iconRotate={180}
        ref={ref}
        download
        target="_blank"
        {...props}
      >
        {children}
      </ButtonControl>
    );
  },
);

interface Props extends Omit<BaseProps, "icon" | "iconRotate"> {
  download?: true;
  target?: "_blank" | "_self";
}

export default ButtonControlDownload;
