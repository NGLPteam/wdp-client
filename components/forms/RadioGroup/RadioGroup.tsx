import React, { useState, forwardRef } from "react";
import BaseInputLabel from "components/forms/BaseInputLabel";
import type InputProps from "../inputType";
import Radio from "./Radio";
import * as Styled from "./RadioGroup.styles";

const RadioGroup = forwardRef(
  (
    { groupLabel, name, description, options, ...props }: Props,
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
        {groupLabel && (
          <BaseInputLabel hideLabel={!groupLabel}>{groupLabel}</BaseInputLabel>
        )}
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
    Pick<InputProps, "name" | "description" | "required"> {
  groupLabel?: string;
  options: { value: string; label: string }[];
}

export default RadioGroup;
