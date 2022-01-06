import React from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./CheckboxGroup.styles";

type BaseProps = React.ComponentProps<typeof BaseInputWrapper>;

function CheckboxGroup({ children, ...props }: BaseProps) {
  return (
    <BaseInputWrapper role="group" {...props}>
      <Styled.CheckboxesWrapper>{children}</Styled.CheckboxesWrapper>
    </BaseInputWrapper>
  );
}

export default CheckboxGroup;
