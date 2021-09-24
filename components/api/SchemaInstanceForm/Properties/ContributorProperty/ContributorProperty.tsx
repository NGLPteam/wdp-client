import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Select from "components/forms/Select";

import { ContributorPropertyFragment$key } from "@/relay/ContributorPropertyFragment.graphql";

import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";

export default function ContributorProperty(props: Props) {
  const { contributors: options } = useSchemaFormContext();

  const field = useFragment<ContributorPropertyFragment$key>(
    fragment,
    props.field
  );

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Select
          label={label}
          required={required}
          options={options}
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
