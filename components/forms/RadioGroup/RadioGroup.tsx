import React, { useState, forwardRef } from "react";
import BaseInputLabel from "components/forms/BaseInputLabel";
import type InputProps from "../inputType";
import Radio from "./Radio";
import * as Styled from "./RadioGroup.styles";

const RadioGroup = forwardRef(
  (
    { label, name, description, options, hideLabel, ...props }: Props,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [selected, setSelected] = useState<string>("");
    const handleTabIndex = (e: React.ChangeEvent<HTMLInputElement>) =>
      setSelected(e.target.value);

    const radios = options.map((option, i) => (
      <Radio
        key={option.value}
        id={option.value}
        value={option.value}
        order={i + 1}
        name={name}
        label={option.label}
        onChange={handleTabIndex}
        selected={selected}
        {...props}
      />
    ));
    return (
      <Styled.Group
        role="radiogroup"
        aria-label={props["aria-label"] || undefined}
        ref={ref}
      >
        <BaseInputLabel hideLabel={hideLabel}>{label}</BaseInputLabel>
        {description && <Styled.Description>{description}</Styled.Description>}
        {radios}
      </Styled.Group>
    );
  }
);

interface Props
  extends Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      "aria-label" | "id"
    >,
    Pick<
      InputProps,
      "name" | "description" | "required" | "hideLabel" | "label"
    > {
  options: { value: string; label: string }[];
}

export default RadioGroup;
