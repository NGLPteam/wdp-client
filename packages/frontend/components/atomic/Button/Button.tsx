import React, { forwardRef } from "react";
import { IconFactory } from "../../factories";
import * as Styles from "./Button.styles";
import type { MaybeButtonRef } from "@castiron/common-types";

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
      secondary,
      iconLeft,
      hideLabelOnMobile,
      isBlock,
      ...props
    }: (Props | LinkProps) & ButtonProps,
    ref: MaybeButtonRef,
  ) => {
    return (
      <Styles.ButtonStyles
        ref={ref}
        className={className}
        $hideLabelOnMobile={(hideLabelOnMobile && !!icon) || undefined}
        $isBlock={isBlock}
        $size={size}
        $style={secondary ? "secondary" : "primary"}
        {...props}
      >
        {icon && iconLeft && (
          <IconFactory icon={icon} role={children ? "presentation" : "img"} />
        )}
        {children && (
          <Styles.ButtonLabel
            $hideOnMobile={(hideLabelOnMobile && !!icon) || undefined}
          >
            {children}
          </Styles.ButtonLabel>
        )}
        {icon && !iconLeft && (
          <IconFactory icon={icon} role={children ? "presentation" : "img"} />
        )}
      </Styles.ButtonStyles>
    );
  },
);

export default Button;

interface Props {
  /** Button size - default is large */
  size?: "lg" | "sm";
  /** Show icon on the left */
  iconLeft?: true;
  /** Hide the label on mobile devices */
  hideLabelOnMobile?: true;
  /** Display as a block element */
  isBlock?: true;
  /** Use secondary style */
  secondary?: true;
  icon?: React.ComponentProps<typeof IconFactory>["icon"];
}

type LinkProps = Props & {
  as: string;
  href?: string;
  target?: string;
  download?: boolean;
};
