import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";

import type { AssetsPropertyFragment$key } from "@/relay/AssetsPropertyFragment.graphql";

export default function AssetsProperty(props: Props) {
  const { assets: options } = useSchemaFormContext();

  const field = useFragment<AssetsPropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Select
          label={label}
          required={required}
          options={options}
          isWide={isWide}
          multiple
          {...register(name)}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: AssetsPropertyFragment$key;
}

const fragment = graphql`
  fragment AssetsPropertyFragment on AssetsProperty {
    ...ScalarPropertyFragment
  }
`;
