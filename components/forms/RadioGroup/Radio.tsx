import * as React from "react";
import type { FieldValues } from "react-hook-form";
import * as Styled from "./RadioGroup.styles";

export default function Radio({
  name,
  value,
  label,
  order,
  selected,
  id,
  ...props
}: Props) {
  return (
    <Styled.Label htmlFor={id}>
      <Styled.Radio
        id={id}
        type="radio"
        role="radio"
        value={value}
        tabIndex={selected === value || (!selected && order === 1) ? 0 : -1}
        aria-checked={selected === value}
        name={name}
        {...props}
      />
      <Styled.LabelText className="t-copy-sm">{label}</Styled.LabelText>
    </Styled.Label>
  );
}

interface Props extends FieldValues {
  value: string;
  label: string;
  order: number;
  selected: string;
  id?: string;
}
