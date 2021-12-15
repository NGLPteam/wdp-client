import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";

import type { ContributorPropertyFragment$key } from "@/relay/ContributorPropertyFragment.graphql";

export default function ContributorProperty(props: Props) {
  const { contributors: options } = useSchemaFormContext();

  const field = useFragment<ContributorPropertyFragment$key>(
    fragment,
    props.field
  );

  const { register } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Select
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
  field: ContributorPropertyFragment$key;
}

const fragment = graphql`
  fragment ContributorPropertyFragment on ContributorProperty {
    ...ScalarPropertyFragment
  }
`;
