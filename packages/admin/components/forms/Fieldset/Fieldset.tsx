import React from "react";
import * as Styled from "./Fieldset.styles";

const Fieldset = ({ label, children, noGap = false, description }: Props) => {
  return (
    <Styled.Fieldset>
      <Styled.Legend $noGap={noGap} className="t-label-lg a-color-accent">
        {label}
      </Styled.Legend>
      {description && <Styled.Description>{description}</Styled.Description>}
      {children}
    </Styled.Fieldset>
  );
};

interface Props {
  label: string;
  children: React.ReactNode;
  noGap?: boolean;
  description?: string;
}

export default Fieldset;

Fieldset.Fields = Styled.Fields;
Fieldset.Field = Styled.Field;
Fieldset.Actions = Styled.Actions;
