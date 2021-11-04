import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller } from "react-hook-form";

// import Select from "components/forms/Select";
import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";
import Multiselect from "components/forms/Multiselect";

import type { ContributorsPropertyFragment$key } from "@/relay/ContributorsPropertyFragment.graphql";

export default function ContributorsProperty(props: Props) {
  const { contributors: options } = useSchemaFormContext();

  const field = useFragment<ContributorsPropertyFragment$key>(
    fragment,
    props.field
  );

  return (
    <ScalarProperty field={field}>
      {({ label, required, control, name, isWide }) => (
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
