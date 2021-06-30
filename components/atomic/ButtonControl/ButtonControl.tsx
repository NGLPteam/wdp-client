import React, { forwardRef } from "react";
import * as Styled from "./ButtonControl.styles";
import { IconFactory } from "components/factories";

const ButtonControl = forwardRef(
  ({ children, iconRotate, ...props }: Props, ref) => {
    const { icon } = props;

    return (
      <Styled.ButtonControl ref={ref} {...props}>
        <>
          {children && <span>{children}</span>}
          {icon && <IconFactory icon={icon} rotate={iconRotate} />}
        </>
      </Styled.ButtonControl>
    );
  }
);

interface Props {
  icon?: string;
  iconRotate?: number;
  children?: JSX.Element | JSX.Element[] | string;
  as?: React.ElementType;
  onClick?: () => void;
}

export default ButtonControl;
