import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";

import type { EntitiesPropertyFragment$key } from "@/relay/EntitiesPropertyFragment.graphql";

export default function EntitiesProperty(props: Props) {
  const field = useFragment<EntitiesPropertyFragment$key>(
    fragment,
    props.field
  );

  const { register } = useFormContext();

  const { t } = useTranslation();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name }) => (
        <Select
          label={label}
          required={required}
          options={[]}
          isWide
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
  field: EntitiesPropertyFragment$key;
}

const fragment = graphql`
  fragment EntitiesPropertyFragment on EntitiesProperty {
    ...ScalarPropertyFragment
  }
`;
