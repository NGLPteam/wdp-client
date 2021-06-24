import React from "react";
import * as Styled from "./ButtonControl.styles";
import { IconFactory } from "components/factories";

const ButtonControl = ({ children, iconRotate, ...props }: Props) => {
  const { icon } = props;

  return (
    <Styled.ButtonControl {...props}>
      <>
        {children && <span>{children}</span>}
        {icon && <IconFactory icon={icon} rotate={iconRotate} />}
      </>
    </Styled.ButtonControl>
  );
};

interface Props {
  icon?: string;
  iconRotate?: number;
  children?: JSX.Element | JSX.Element[] | string;
  as?: React.ElementType;
}

export default ButtonControl;
