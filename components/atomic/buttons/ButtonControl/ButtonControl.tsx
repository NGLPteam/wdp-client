import React, { forwardRef } from "react";
import * as Styled from "./ButtonControl.styles";
import { IconFactory } from "components/factories";
import { Authorize } from "components/auth";
type IconFactoryProps = React.ComponentProps<typeof IconFactory>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;

const ButtonControl = forwardRef(
  ({ children, iconRotate, actions, allowedActions, ...props }: Props, ref) => {
    const { icon } = props;

    const content = (
      <Styled.ButtonControl ref={ref} {...props}>
        <>
          {children && <span>{children}</span>}
          {icon && <IconFactory icon={icon} rotate={iconRotate} />}
        </>
      </Styled.ButtonControl>
    );

    return actions || allowedActions ? (
      <Authorize actions={actions} allowedActions={allowedActions}>
        {content}
      </Authorize>
    ) : (
      content
    );
  }
);

interface Props extends Omit<AuthorizeProps, "children"> {
  children?: React.ReactNode;
  icon?: IconFactoryProps["icon"];
  iconRotate?: number;
  as?: React.ElementType;
  onClick?: () => void;
  "aria-label"?: string;
}

export default ButtonControl;
