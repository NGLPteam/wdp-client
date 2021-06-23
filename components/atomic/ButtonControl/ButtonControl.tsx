import React from "react";
import * as Styled from "./ButtonControl.styles";
import { IconFactory } from "components/factories";

const ButtonControl = ({ children, ...props }: Props) => {
  const { icon } = props;

  return (
    <Styled.ButtonControl {...props}>
      <>
        {children && <span>{children}</span>}
        {icon && <IconFactory icon={icon} />}
      </>
    </Styled.ButtonControl>
  );
};

interface Props {
  icon?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

export default ButtonControl;
