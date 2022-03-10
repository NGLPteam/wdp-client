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
      className,
      icon,
      size,
      style,
      iconLeft,
      hideLabelOnMobile,
      isBlock,
      ...props
    }: Props & ButtonProps,
    ref: MaybeButtonRef
  ) => {
    return (
      <Styles.ButtonStyles
        ref={ref}
        className={className}
        $hideLabelOnMobile={hideLabelOnMobile && icon}
        $isBlock={isBlock}
        $size={size}
        $style={style}
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
  /** Button size - default is large */
  size?: "lg" | "sm";
  /** Button style - default is primary */
  style?: "primary" | "secondary";
  /** Show icon on the left */
  iconLeft?: true;
  /** Hide the label on mobile devices */
  hideLabelOnMobile?: true;
  /** Display as a block element */
  isBlock?: true;
}
