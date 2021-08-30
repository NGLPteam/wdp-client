import React from "react";
import * as Styled from "./Fieldset.styles";

const Fieldset = ({ label, children }: Props) => {
  return (
    <Styled.Fieldset>
      <Styled.Legend className="t-label-lg a-color-accent">
        {label}
      </Styled.Legend>
      {children}
    </Styled.Fieldset>
  );
};

interface Props {
  label: string;
  children: React.ReactNode;
}

export default Fieldset;

Fieldset.Fields = Styled.Fields;
