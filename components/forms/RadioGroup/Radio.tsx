import * as React from "react";
import * as Styled from "./RadioGroup.styles";

export default function Radio({
  name,
  label,
  order,
  selected,
  ...props
}: Props) {
  return (
    <Styled.Label>
      <Styled.Radio
        id={label}
        type="radio"
        role="radio"
        tabIndex={selected === label || (!selected && order === 1) ? 0 : -1}
        aria-checked={selected === label}
        name={name}
        {...props}
      />
      <Styled.LabelText className="t-copy-sm">{label}</Styled.LabelText>
    </Styled.Label>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  order: number;
  selected: string;
}
