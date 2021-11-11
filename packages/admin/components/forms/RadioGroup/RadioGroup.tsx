import React, { useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import type InputProps from "../inputType";
import Radio from "./Radio";
import * as Styled from "./RadioGroup.styles";
import BaseInputLabel from "components/forms/BaseInputLabel";

const RadioGroup = forwardRef(
  (
    { label, name, description, options, hideLabel, ...props }: Props,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const defaultValue = options.filter((option) => option.default)[0]?.value;
    const [selected, setSelected] = useState<string>(defaultValue ?? "");
    const handleTabIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelected(e.target.value);
    };

    const { t } = useTranslation();

    const radios = options.map((option, i) => (
      <Radio
        key={option.value}
        id={option.value}
        value={option.value}
        order={i + 1}
        name={name}
        label={option.label}
        onClick={handleTabIndex}
        selected={selected}
        checked={option.default}
        {...props}
      />
    ));
    return (
      <Styled.Group
        role="radiogroup"
        aria-label={props["aria-label"] || undefined}
        ref={ref}
      >
        <BaseInputLabel hideLabel={hideLabel}>{t(label)}</BaseInputLabel>
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
  options: { value: string; label: string; default?: boolean }[];
}

export default RadioGroup;
