import React, { forwardRef, Ref } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import * as Styled from "./Radio.styles";

const Radio = forwardRef(
  (
    {
      label,
      name,
      description,
      hideLabel,
      error,
      isWide,
      options,
      ...inputProps
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const test = options.map((option) => (
      <Styled.Label htmlFor={option}>
        {option}
        <input
          id={option}
          aria-describedby={`${option}_label`}
          type="radio"
          ref={ref}
          name={name}
          {...inputProps}
        />
      </Styled.Label>
    ));
    return test;
  }
);

interface Props extends InputProps {
  text: string;
  options: string[];
}

export default Radio;
