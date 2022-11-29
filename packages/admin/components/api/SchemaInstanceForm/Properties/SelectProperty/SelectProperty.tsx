import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";

import type { SelectPropertyFragment$key } from "@/relay/SelectPropertyFragment.graphql";

export default function SelectProperty(props: Props) {
  const field = useFragment<SelectPropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  const { t } = useTranslation();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Select
          label={label}
          required={required}
          options={field.options}
          isWide={isWide}
          placeholder={
            required ? undefined : t("forms.fields.select_placeholder")
          }
          {...register(name)}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: SelectPropertyFragment$key;
}

const fragment = graphql`
  fragment SelectPropertyFragment on SelectProperty {
    options {
      label
      value
    }

    ...ScalarPropertyFragment
  }
`;
