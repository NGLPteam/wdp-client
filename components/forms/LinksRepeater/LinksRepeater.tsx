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
import { useTranslation } from "react-i18next";
import useIsMobile from "hooks/useIsMobile";

function LinksRepeater<T extends FieldValues = FieldValues>({
  label,
  itemLabel,
  register,
  control,
  name,
}: Props<T>) {
  const { t } = useTranslation();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const handleAddField = () => {
    append({ title: "", url: "" });
  };

  const isMobile = useIsMobile();

  return (
    <Fieldset label={t(label)}>
      {fields.map((field, index) => (
        <Fieldset.Fields key={field.id} isMobile={isMobile}>
          <Fieldset.Field isMobile={isMobile}>
            <Forms.Input
              label="forms.inputs.linkRepeater.fields.title"
              {...register(`${name}.${index}.title` as Path<Partial<T>>, {
                required: true,
              })}
            />
          </Fieldset.Field>
          <Fieldset.Field isMobile={isMobile}>
            <Forms.Input
              label="forms.inputs.linkRepeater.fields.url"
              type="url"
              {...register(`${name}.${index}.url` as Path<Partial<T>>, {
                required: true,
              })}
            />
          </Fieldset.Field>
          <Fieldset.Actions isMobile={isMobile}>
            <ButtonControl
              type="button"
              aria-label={t("forms.inputs.linkRepeater.remove", { itemLabel })}
              onClick={() => {
                remove(index);
              }}
              icon="delete"
              size="large"
            />
          </Fieldset.Actions>
        </Fieldset.Fields>
      ))}
      <ButtonControl
        type="button"
        onClick={handleAddField}
        icon="plus"
        size="large"
      >
        {t("forms.inputs.linkRepeater.add", { itemLabel })}
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
