import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller, useFormContext } from "react-hook-form";
import ScalarProperty from "../ScalarProperty";
import Multiselect from "components/forms/Multiselect";
import { useSchemaFormFieldsContext } from "components/api/SchemaFormFields/SchemaFormFieldsContext";
import type { ContributorsPropertyFragment$key } from "@/relay/ContributorsPropertyFragment.graphql";

export default function ContributorsProperty(props: Props) {
  const { assets: options } = useSchemaFormFieldsContext();

  const field = useFragment<ContributorsPropertyFragment$key>(
    fragment,
    props.field
  );

  const { control } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Multiselect
              label={label}
              required={required}
              options={options}
              isWide={isWide}
              {...field}
            />
          )}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: ContributorsPropertyFragment$key;
}

const fragment = graphql`
  fragment ContributorsPropertyFragment on ContributorsProperty {
    ...ScalarPropertyFragment
  }
`;
