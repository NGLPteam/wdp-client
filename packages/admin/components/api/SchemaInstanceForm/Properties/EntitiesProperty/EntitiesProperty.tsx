import React, { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ScalarProperty from "../ScalarProperty";
import Multiselect from "components/forms/Multiselect";
import type { EntitiesPropertyFragment$key } from "@/relay/EntitiesPropertyFragment.graphql";
import { getEntityTitle } from "components/factories/EntityTitleFactory";

export default function EntitiesProperty(props: Props) {
  const field = useFragment<EntitiesPropertyFragment$key>(
    fragment,
    props.field
  );

  const { control } = useFormContext();

  const { t } = useTranslation();

  const options = useMemo(() => {
    return field.availableEntities.map(({ entity, value }) => {
      return {
        label: getEntityTitle(entity),
        value,
      };
    });
  }, [field]);

  return (
    <ScalarProperty field={field}>
      {({ label, required, name }) => (
        <Controller
          name={name}
          control={control}
          render={({ field: { value, ...props } }) => (
            <Multiselect
              label={label}
              required={required}
              options={options}
              isWide
              placeholder={
                required ? undefined : t("forms.fields.select_placeholder")
              }
              {...props}
            />
          )}
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
    availableEntities {
      label
      value
      entity {
        ...getEntityTitleFragment
      }
    }
  }
`;
