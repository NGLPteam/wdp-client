import React, { Ref, forwardRef, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  getDaysInMonth,
  getYear,
  getMonth,
  getDay,
  dateLeadingZero,
} from "@wdp/lib/helpers/dates";
import * as Styled from "./VariableDatePicker.styles";
import Input from "components/forms/Input";
import Fieldset from "components/forms/Fieldset";
import type { DatePrecision } from "types/graphql-schema";
import type InputProps from "components/forms/inputType";

const VariableDatePicker = forwardRef(
  (
    { label, defaultValue, value, onChange, required }: Props,
    // The ref is passed in from Control, but isn't needed for this input
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: Ref<HTMLInputElement>
  ) => {
    const { t } = useTranslation();
    const yearRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLInputElement>(null);
    const defaultPrecision = value?.precision || defaultValue?.precision;
    const defaultDate = value?.value || defaultValue?.value;

    const getValues = useCallback(() => {
      if (!yearRef?.current || !monthRef?.current || !dayRef.current)
        return null;

      const year = parseInt(yearRef.current.value || "");
      let month = parseInt(monthRef.current.value || "");
      let day = parseInt(dayRef.current.value || "");

      if (!month || !year) {
        dayRef.current.value = "";
        day = 0;
      }

      if (!year) {
        monthRef.current.value = "";
        month = 0;
      }

      return { year, month, day };
    }, [yearRef, monthRef, dayRef]);

    const handleOnChange = useCallback(() => {
      const values = getValues();
      if (!values) return;

      const { year, month, day } = values;
      const precision = day ? "DAY" : month ? "MONTH" : year ? "YEAR" : "NONE";

      const value = year
        ? `${year}-${dateLeadingZero(month)}-${dateLeadingZero(day)}`
        : undefined;

      if (onChange) {
        onChange({
          precision,
          value,
        });
      }
    }, [getValues, onChange]);

    function maxDays() {
      const year = yearRef?.current?.value;
      const month = monthRef?.current?.value;
      if (!year || !month) return;

      return getDaysInMonth(parseInt(month, 10), parseInt(year, 10));
    }

    function onYearInvalid({ target }: { target: HTMLFormElement }) {
      if (!target) return;

      target.setCustomValidity(t("forms.validation.year"));
    }

    function resetYearInvalid({ target }: { target: HTMLFormElement }) {
      if (!target) return;

      target.setCustomValidity("");
    }

    return (
      <Fieldset label={t(label)}>
        <Styled.Wrapper>
          <Input
            name="year"
            type="number"
            label={t("forms.fields.year")}
            onChange={handleOnChange}
            ref={yearRef}
            defaultValue={getYear(defaultDate)}
            required={required}
            min="1000"
            max="9999"
            onInvalid={onYearInvalid}
            onInput={resetYearInvalid}
          />
          <Input
            name="month"
            type="number"
            label={t("forms.fields.month")}
            min="1"
            max="12"
            onChange={handleOnChange}
            ref={monthRef}
            disabled={!yearRef?.current?.value}
            defaultValue={
              defaultPrecision !== "YEAR" ? getMonth(defaultDate) : undefined
            }
          />
          <Input
            name="day"
            type="number"
            label={t("forms.fields.day")}
            onChange={handleOnChange}
            ref={dayRef}
            min="1"
            max={`${maxDays()}`}
            disabled={!monthRef?.current?.value}
            defaultValue={
              defaultPrecision !== "YEAR" && defaultPrecision !== "MONTH"
                ? getDay(defaultDate)
                : undefined
            }
          />
        </Styled.Wrapper>
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
