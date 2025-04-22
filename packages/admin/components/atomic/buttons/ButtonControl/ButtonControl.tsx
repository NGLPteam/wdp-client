import React, { forwardRef } from "react";
import { IconFactory } from "components/factories";
import { Authorize } from "components/auth";
import * as Styled from "./ButtonControl.styles";
type IconFactoryProps = React.ComponentProps<typeof IconFactory>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;

const ButtonControl = forwardRef(
  (
    {
      children,
      iconRotate,
      iconChecked,
      actions,
      allowedActions,
      $closeDropdown,
      icon,
      size,
      onClick,
      ...props
    }: Props,
    ref,
  ) => {
    const handleClick = onClick
      ? $closeDropdown
        ? (e: React.MouseEvent) => {
            $closeDropdown();
            onClick(e);
          }
        : onClick
      : $closeDropdown;

    const content = (
      <Styled.ButtonControl
        ref={ref}
        onClick={handleClick}
        $icon={icon}
        $size={size}
        {...props}
      >
        <>
          {children && (
            <Styled.ButtonText $size={size} $icon={icon}>
              {children}
            </Styled.ButtonText>
          )}
          {icon && (
            <IconFactory
              icon={icon}
              rotate={iconRotate}
              checked={iconChecked}
              role="presentation"
            />
          )}
        </>
      </Styled.ButtonControl>
    );

    return actions ? (
      <Authorize actions={actions} allowedActions={allowedActions}>
        {content}
      </Authorize>
    ) : (
      content
    );
  },
);

interface Props extends Omit<AuthorizeProps, "children"> {
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: IconFactoryProps["icon"];
  iconRotate?: number;
  iconChecked?: boolean;
  as?: React.ElementType;
  onClick?: React.MouseEventHandler;
  "aria-label"?: string;
  type?: "button" | "submit";
  size?: "large";
  $closeDropdown?: () => void;
  className?: string;
}

export default ButtonControl;
