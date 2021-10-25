import React, { useState } from "react";
import BaseInputLabel from "components/forms/BaseInputLabel";
import Radio from "./Radio";
import * as Styled from "./RadioGroup.styles";

const RadioGroup = ({
  groupLabel,
  name,
  description,
  options,
  ...props
}: Props) => {
  const [selected, setSelected] = useState<string>("");
  const handleTabIndex = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.id);

  const radios = options.map((option, i) => (
    <Radio
      key={option}
      order={i + 1}
      name={name}
      label={option}
      onChange={handleTabIndex}
      selected={selected}
    />
  ));
  return (
    <Styled.Group
      role="radiogroup"
      aria-label={props["aria-label"] || undefined}
    >
      {groupLabel && (
        <BaseInputLabel hideLabel={!groupLabel}>{groupLabel}</BaseInputLabel>
      )}
      {description && <Styled.Description>{description}</Styled.Description>}
      {radios}
    </Styled.Group>
  );
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  groupLabel?: string;
  name: string;
  description?: string;
  options: string[];
}

export default RadioGroup;
