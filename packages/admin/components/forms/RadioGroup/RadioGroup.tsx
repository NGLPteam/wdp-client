import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import BaseInputLabel from "components/forms/BaseInputLabel";
import Radio from "./Radio";
import * as Styled from "./RadioGroup.styles";
import type InputProps from "../inputType";

const RadioGroup = forwardRef(
  (
    { label, name, description, options, hideLabel, ...props }: Props,
    // ref is passed to radio button input
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const { t } = useTranslation();

    const radios = options.map((option, i) => (
      <Radio
        key={option.value}
        id={option.value}
        value={option.value}
        order={i + 1}
        name={name}
        label={t(option.label)}
        ref={ref}
        {...props}
      />
    ));

    return (
      <Styled.Group
        role="radiogroup"
        aria-label={props["aria-label"] || undefined}
      >
        <BaseInputLabel hideLabel={hideLabel}>{t(label)}</BaseInputLabel>
        {description && (
          <Styled.Description>{t(description)}</Styled.Description>
        )}
        {radios}
      </Styled.Group>
    );
  },
);

type BaseProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "aria-label" | "id"
> &
  Pick<InputProps, "name" | "required" | "hideLabel" | "label">;

interface Props extends BaseProps {
  description?: string;
  options: { value: string; label: string; default?: boolean }[];
}

export default RadioGroup;
