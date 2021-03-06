import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller, useFormContext } from "react-hook-form";
import ScalarProperty from "../ScalarProperty";
import { useSchemaFormFieldsContext } from "components/api/SchemaFormFields/SchemaFormFieldsContext";
import AssetPropertySelect from "components/forms/AssetPropertySelect";
import type { AssetPropertyFragment$key } from "@/relay/AssetPropertyFragment.graphql";

export default function AssetProperty(props: Props) {
  const { assets: options } = useSchemaFormFieldsContext();

  const field = useFragment<AssetPropertyFragment$key>(fragment, props.field);

  const { control } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, ...fieldProps } }) => (
            <AssetPropertySelect
              label={label}
              required={required}
              options={options}
              isWide={isWide}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange(e.target.value ? e : null)
              }
              {...fieldProps}
            />
          )}
        />
      )}
    </ScalarProperty>
  );
}
interface Props {
  field: AssetPropertyFragment$key;
}

const fragment = graphql`
  fragment AssetPropertyFragment on AssetProperty {
    ...ScalarPropertyFragment
  }
`;
