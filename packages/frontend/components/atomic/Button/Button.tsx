import React, { forwardRef } from "react";
import { IconFactory } from "../../factories";
import * as Styles from "./Button.styles";
import type { MaybeButtonRef } from "types/ref";
type ButtonProps = React.ComponentProps<typeof Styles.ButtonStyles>;

/**
 * This component can be used as a button or link, and uses the a-button utility classes.
 */
const Button = forwardRef(
  (
    { children, icon, size = "lg", secondary, ...props }: Props & ButtonProps,
    ref: MaybeButtonRef
  ) => {
    let className = `a-button-${secondary ? "secondary" : "primary"}`;
    if (size !== "lg") className += `-${size}`;

    return (
      <Styles.ButtonStyles ref={ref} className={className} {...props}>
        {children && <span>{children}</span>}
        {icon && <IconFactory icon={icon} />}
      </Styles.ButtonStyles>
    );
  }
);

export default Button;

interface Props {
  /* Button size - Default large */
  size?: "lg" | "sm";
  /* Set to true for secondary style */
  secondary?: boolean;
}
