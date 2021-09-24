import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Select from "components/forms/Select";

import { AssetsPropertyFragment$key } from "@/relay/AssetsPropertyFragment.graphql";

import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";

export default function AssetsProperty(props: Props) {
  const { assets: options } = useSchemaFormContext();

  const field = useFragment<AssetsPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Select
          label={label}
          required={required}
          options={options}
          multiple
          {...register}
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
