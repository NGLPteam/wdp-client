import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Select from "components/forms/Select";

import { ContributorsPropertyFragment$key } from "@/relay/ContributorsPropertyFragment.graphql";

import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";

export default function ContributorsProperty(props: Props) {
  const { contributors: options } = useSchemaFormContext();

  const field = useFragment<ContributorsPropertyFragment$key>(
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
          multiple
          {...register}
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
