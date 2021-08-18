import React, { forwardRef, Ref } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Switch.styles";

import type InputProps from "../inputType";

const Switch = forwardRef(
  (
    { label, text, description, hideLabel, error, ...inputProps }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <BaseInputWrapper hideLabel={hideLabel} label={label} error={error}>
        {({ uid }) => (
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
        )}
      </BaseInputWrapper>
    );
  }
);

interface Props extends InputProps {
  text: string;
}

export default Switch;
