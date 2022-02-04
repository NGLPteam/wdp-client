import React from "react";
import { useFormContext } from "react-hook-form";
import HiddenField from "../HiddenField";
import { DatePicker } from "../Input";
import Select from "../Select";

export default function VisibilityFields() {
  const { watch, register } = useFormContext();

  return (
    <>
      <Select
        options={[
          { label: "Visible", value: "VISIBLE" },
          { label: "Hidden", value: "HIDDEN" },
          { label: "Limited", value: "LIMITED" },
        ]}
        label="forms.fields.visibility"
        required
        isWide
        {...register("visibility")}
      />
      <HiddenField watch={watch} field="visibility" showOn="LIMITED">
        <DatePicker
          label="forms.fields.visible_after"
          {...register("visibleAfterAt")}
        />
      </HiddenField>
      <HiddenField watch={watch} field="visibility" showOn="LIMITED">
        <DatePicker
          label="forms.fields.visible_until"
          {...register("visibleUntilAt")}
        />
      </HiddenField>
    </>
  );
}
