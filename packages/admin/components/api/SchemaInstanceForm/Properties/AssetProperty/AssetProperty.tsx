import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";
import AssetPropertySelect from "components/forms/AssetPropertySelect";

import type { AssetPropertyFragment$key } from "@/relay/AssetPropertyFragment.graphql";

export default function AssetProperty(props: Props) {
  const { assets: options } = useSchemaFormContext();

  const field = useFragment<AssetPropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <AssetPropertySelect
          label={label}
          required={required}
          options={options}
          isWide={isWide}
          {...register(name)}
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
