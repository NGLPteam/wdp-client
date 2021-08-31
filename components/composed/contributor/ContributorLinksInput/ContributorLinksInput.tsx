import React from "react";
import { ButtonControl } from "components/atomic";
import { Fieldset } from "components/atomic/forms";
import { useFieldArray } from "react-hook-form";
import type {
  ArrayPath,
  FieldValues,
  Control,
  UseFormRegister,
} from "react-hook-form";
import { Forms } from "components/api/MutationForm";

function ContributorLinksInput<T extends FieldValues = FieldValues>({
  label,
  register,
  control,
  name,
}: Props<T>) {
  const { fields, append, remove } = useFieldArray<T>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name, // unique name for your Field Array
  });

  const handleAddField = () => {
    append({ title: "", url: "" });
  };

  return (
    <Fieldset label={label}>
      {fields.map((field, index) => (
        <Fieldset.Fields key={field.id}>
          <Forms.Input
            label="Title"
            {...register(`${name}.${index}.title` as const)}
          />
          <Forms.Input
            label="URL"
            type="url"
            {...register(`${name}.${index}.url` as const)}
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
  name: ArrayPath<T>;
}

export default ContributorLinksInput;
