import { useFieldArray } from "react-hook-form";
import type {
  Path,
  FieldValues,
  Control,
  UseFormRegister,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic";
import { Fieldset } from "components/forms";
import { Forms } from "components/api/MutationForm";
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
  const isMobile = useIsMobile();

  const handleAddField = () => {
    append({ title: "", url: "" });
  };

  return (
    <Fieldset label={t(label)}>
      {fields.map((field, index) => (
        <Fieldset.Fields key={field.id}>
          <Fieldset.Field>
            <Forms.Input
              label="forms.fields.title"
              {...register(`${name}.${index}.title` as Path<Partial<T>>, {
                required: true,
              })}
            />
          </Fieldset.Field>
          <Fieldset.Field>
            <Forms.Input
              label="forms.fields.url"
              type="url"
              {...register(`${name}.${index}.url` as Path<Partial<T>>, {
                required: true,
              })}
            />
          </Fieldset.Field>
          <Fieldset.Actions>
            <ButtonControl
              type="button"
              aria-label={t("forms.link_repeater.remove", { name: itemLabel })}
              onClick={() => {
                remove(index);
              }}
              icon="delete"
              size={!isMobile ? "large" : undefined}
            >
              {isMobile ? "Delete" : null}
            </ButtonControl>
          </Fieldset.Actions>
        </Fieldset.Fields>
      ))}
      <ButtonControl
        type="button"
        onClick={handleAddField}
        icon="plus"
        size={!isMobile ? "large" : undefined}
      >
        {t("forms.link_repeater.add", { name: itemLabel })}
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
