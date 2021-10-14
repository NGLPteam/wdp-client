import React, { forwardRef, Ref } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import * as Styled from "./Switch.styles";

const Switch = forwardRef(
  (
    {
      label,
      name,
      text,
      description,
      hideLabel,
      error,
      isWide,
      ...inputProps
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <BaseInputWrapper
        name={name}
        hideLabel={hideLabel}
        label={label}
        required={inputProps.required}
        isWide={isWide}
      >
        {({ uid }) => (
          <Styled.SwitchWrapper as="label" htmlFor={uid}>
            {text}
            <input
              id={uid}
              aria-describedby={`${uid}_label`}
              type="checkbox"
              ref={ref}
              className="a-hidden"
              name={name}
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
