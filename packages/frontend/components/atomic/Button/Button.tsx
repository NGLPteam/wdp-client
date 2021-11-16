import React from "react";
import { IconFactory } from "../../factories";
import * as Styles from "./Button.styles";
type ButtonProps = React.ComponentProps<typeof Styles.ButtonStyles>;

// Can be used as a button or link
// Gets base styles from utility/appearance
export default function Button({
  children,
  icon,
  size = "lg",
  secondary,
  ...props
}: Props & ButtonProps) {
  let className = `a-button-${secondary ? "secondary" : "primary"}`;
  if (size !== "lg") className += `-${size}`;

  return (
    <Styles.ButtonStyles className={className} {...props}>
      {children && <span>{children}</span>}
      {icon && <IconFactory icon={icon} />}
    </Styles.ButtonStyles>
  );
}

interface Props {
  size?: "lg" | "sm";
  secondary?: boolean;
}
