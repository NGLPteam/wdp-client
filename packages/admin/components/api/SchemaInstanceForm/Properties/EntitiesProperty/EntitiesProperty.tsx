import React, { useMemo } from "react";
import { useFragment, graphql } from "react-relay";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Multiselect from "components/forms/Multiselect";
import { getEntityTitle } from "components/factories/EntityTitleFactory";
import type { EntitiesPropertyFragment$key } from "@/relay/EntitiesPropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

export default function EntitiesProperty(props: Props) {
  const field = useFragment<EntitiesPropertyFragment$key>(
    fragment,
    props.field,
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
          render={({ field: { ...props } }) => (
            <Multiselect
              label={label}
              required={required}
              options={options}
              isWide
              dragDropOrder
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
