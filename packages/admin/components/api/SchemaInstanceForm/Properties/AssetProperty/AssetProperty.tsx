import React, { useCallback } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ScalarProperty from "../ScalarProperty";
import { useSchemaFormFieldsContext } from "components/api/SchemaFormFields/SchemaFormFieldsContext";
import AssetPropertySelect from "components/forms/AssetPropertySelect";
import type { AssetPropertyFragment$key } from "@/relay/AssetPropertyFragment.graphql";
import isFunction from "lodash/isFunction";

export default function AssetProperty(props: Props) {
  const { assets: options, refetch } = useSchemaFormFieldsContext();

  const field = useFragment<AssetPropertyFragment$key>(fragment, props.field);

  const { control } = useFormContext();

  const handleRefetch = useCallback(
    () => (isFunction(refetch) ? refetch({}) : null),
    [refetch]
  );

  const { t } = useTranslation();

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
              onChange={(value?: string) => onChange(value || null)}
              refetchAssets={handleRefetch}
              description={
                props.description || "forms.asset_property_select.description"
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
  description?: string;
}

const fragment = graphql`
  fragment AssetPropertyFragment on AssetProperty {
    ...ScalarPropertyFragment
  }
`;
