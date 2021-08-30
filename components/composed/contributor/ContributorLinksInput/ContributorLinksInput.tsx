import React from "react";
import { ButtonControl } from "components/atomic";
import { Fieldset, Input } from "components/atomic/forms";
import { useFieldArray } from "react-hook-form";
import type {
  FieldValues,
  DefaultValue,
  Control,
  UseFormRegister,
} from "react-hook-form";

function ContributorLinksInput<T extends FieldValues = FieldValues>({
  label,
  register,
  control,
  name,
  defaultValue,
}: Props<T>) {
  const { fields, append, remove } = useFieldArray<T>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name, // unique name for your Field Array
    defaultValue,
  });

  const handleAddField = () => {
    append({ title: "", url: "" });
  };

  return (
    <Fieldset label={label}>
      {fields.map((field, index) => (
        <Fieldset.Fields key={field.id}>
          <Input
            label="Title"
            {...register(`${name}.${index}.title`)}
            defaultValue={field.title}
          />
          <Input
            label="URL"
            type="url"
            {...register(`${name}.${index}.url`)}
            defaultValue={field.url}
          />
          <ButtonControl
            type="button"
            aria-label="Remove Link"
            onClick={() => {
              remove(index);
            }}
            icon="delete"
          />
        </Fieldset.Fields>
      ))}
      <ButtonControl type="button" onClick={handleAddField} icon="plus">
        Add New Link
      </ButtonControl>
    </Fieldset>
  );
}

interface Props<T extends FieldValues = FieldValues> {
  label: string;
  register: UseFormRegister<Partial<T>>;
  control: Control<T>;
  name: string;
  defaultValue?: DefaultValue;
}

export default ContributorLinksInput;
