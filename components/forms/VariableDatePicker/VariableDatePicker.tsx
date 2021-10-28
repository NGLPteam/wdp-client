import React, { Ref, forwardRef, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Input from "components/forms/Input";
import Select from "components/forms/Select";
import Fieldset from "components/forms/Fieldset";
import FormGrid from "components/forms/FormGrid";
import type { DatePrecision } from "types/graphql-schema";
import type InputProps from "components/forms/inputType";

const VariableDatePicker = forwardRef(
  (
    { label, name, value, defaultValue, onChange, ...props }: Props,
    // The ref is passed in from Control, but isn't needed for this input
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: Ref<HTMLInputElement>
  ) => {
    const { t } = useTranslation();
    const selectRef = useRef<HTMLSelectElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    const options = [
      {
        label: "None",
        value: "NONE",
      },
      {
        label: "Year",
        value: "YEAR",
      },
      {
        label: "Month",
        value: "MONTH",
      },
      {
        label: "Day",
        value: "DAY",
      },
    ];

    const handleChange = useCallback(() => {
      const dateType = selectRef?.current?.value;
      const dateValue = dateRef?.current?.value;

      if (onChange) {
        onChange({
          precision: dateType as DatePrecision,
          value: dateValue,
        });
      }
    }, [selectRef, dateRef, onChange]);

    return (
      <Fieldset label={t(label)}>
        <FormGrid>
          <Input
            name="value"
            type="date"
            label="date"
            defaultValue={defaultValue?.value}
            onChange={handleChange}
            ref={dateRef}
            {...props}
          />
          <Select
            name="precision"
            label="precision"
            options={options}
            defaultValue={defaultValue?.precision}
            onChange={handleChange}
            ref={selectRef}
            {...props}
          />
        </FormGrid>
      </Fieldset>
    );
  }
);

type Value = {
  precision?: DatePrecision;
  value?: string;
};

interface Props
  extends Omit<InputProps, "placeholder" | "description" | "onChange"> {
  /** Returns the current value */
  onChange?: (value: Value) => void;
  /** Default value */
  value?: Value;
}

export default VariableDatePicker;
