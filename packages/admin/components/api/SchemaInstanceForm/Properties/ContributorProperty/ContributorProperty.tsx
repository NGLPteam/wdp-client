import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

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

  return (
    <ScalarProperty field={field}>
      {({ name, label, required, register, isWide }) => (
        <Select
          name={name}
          label={label}
          required={required}
          options={options}
          isWide={isWide}
          {...register}
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
