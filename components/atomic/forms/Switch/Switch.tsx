import React, { forwardRef, Ref } from "react";
import { useUID } from "react-uid";
import BaseInputLabel from "../BaseInputLabel";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Switch.styles";

import type InputProps from "../inputType";
import BaseInputDescription from "../BaseInputDescription";

const Switch = forwardRef(
  (
    { label, text, description, hideLabel, ...inputProps }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const uid = useUID();

    return (
      <BaseInputWrapper>
        <BaseInputLabel id={`${uid}_label`} as="span" hideLabel={hideLabel}>
          {label}
        </BaseInputLabel>
        <Styled.SwitchWrapper as="label" htmlFor={uid}>
          {text}
          <input
            id={uid}
            aria-describedby={`${uid}_label`}
            type="checkbox"
            ref={ref}
            className="a-hidden"
            {...inputProps}
          />
          <Styled.Icon icon="toggle" />
        </Styled.SwitchWrapper>
        {description && (
          <BaseInputDescription>{description}</BaseInputDescription>
        )}
      </BaseInputWrapper>
    );
  }
);

interface Props extends InputProps {
  text: string;
}

export default Switch;
