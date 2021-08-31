import React from "react";
import { ButtonControl } from "components/atomic";
import { Fieldset } from "components/atomic/forms";
import { useFieldArray } from "react-hook-form";
import type {
  Path,
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
  const { fields, append, remove } = useFieldArray({
    control,
    name,
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
            {...register(`${name}.${index}.title` as Path<Partial<T>>)}
          />
          <Forms.Input
            label="URL"
            type="url"
            {...register(`${name}.${index}.url` as Path<Partial<T>>)}
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
  control: Control;
  name: string;
}

export default ContributorLinksInput;
