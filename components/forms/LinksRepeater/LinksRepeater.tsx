import React from "react";
import { ButtonControl } from "components/atomic";
import { Fieldset } from "components/forms";
import { useFieldArray } from "react-hook-form";
import type {
  Path,
  FieldValues,
  Control,
  UseFormRegister,
} from "react-hook-form";
import { Forms } from "components/api/MutationForm";

function LinksRepeater<T extends FieldValues = FieldValues>({
  label,
  itemLabel,
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
          <Fieldset.Field>
            <Forms.Input
              label="Title"
              {...register(`${name}.${index}.title` as Path<Partial<T>>, {
                required: true,
              })}
            />
          </Fieldset.Field>
          <Fieldset.Field>
            <Forms.Input
              label="URL"
              type="url"
              {...register(`${name}.${index}.url` as Path<Partial<T>>, {
                required: true,
              })}
            />
          </Fieldset.Field>
          <Fieldset.Actions>
            <ButtonControl
              type="button"
              aria-label={`Remove ${itemLabel}`}
              onClick={() => {
                remove(index);
              }}
              icon="delete"
            />
          </Fieldset.Actions>
        </Fieldset.Fields>
      ))}
      <ButtonControl type="button" onClick={handleAddField} icon="plus">
        Add New {itemLabel}
      </ButtonControl>
    </Fieldset>
  );
}

interface Props<T extends FieldValues = FieldValues> {
  label: string;
  itemLabel: string;
  register: UseFormRegister<Partial<T>>;
  control: Control;
  name: string;
}

export default LinksRepeater;
