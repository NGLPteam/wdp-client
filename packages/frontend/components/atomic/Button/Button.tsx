import React, { forwardRef } from "react";
import type { MaybeButtonRef } from "@castiron/common-types";
import { IconFactory } from "../../factories";
import * as Styles from "./Button.styles";

type ButtonProps = React.ComponentProps<typeof Styles.ButtonStyles>;

/**
 * This component can be used as a button or link, and uses the a-button utility classes.
 */
const Button = forwardRef(
  (
    {
      children,
      icon,
      size = "lg",
      secondary,
      iconLeft,
      hideLabelOnMobile,
      ...props
    }: Props & ButtonProps,
    ref: MaybeButtonRef
  ) => {
    let className = `a-button-${secondary ? "secondary" : "primary"}`;
    if (size !== "lg") className += `-${size}`;

    return (
      <Styles.ButtonStyles
        ref={ref}
        className={className}
        $hideLabelOnMobile={hideLabelOnMobile && icon}
        {...props}
      >
        {icon && iconLeft && (
          <IconFactory icon={icon} role={children ? "presentation" : "img"} />
        )}
        {children && (
          <Styles.ButtonLabel $hideOnMobile={hideLabelOnMobile && icon}>
            {children}
          </Styles.ButtonLabel>
        )}
        {icon && !iconLeft && (
          <IconFactory icon={icon} role={children ? "presentation" : "img"} />
        )}
      </Styles.ButtonStyles>
    );
  }
);

export default Button;

interface Props {
  /** Button size - Default large */
  size?: "lg" | "sm";
  /** Set to true for secondary style */
  secondary?: boolean;
  /** Show icon on the left */
  iconLeft?: true;
  /** Hide the label on mobile devices */
  hideLabelOnMobile?: true;
}
