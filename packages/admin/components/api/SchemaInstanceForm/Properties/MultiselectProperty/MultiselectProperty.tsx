import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";

import type { MultiselectPropertyFragment$key } from "@/relay/MultiselectPropertyFragment.graphql";

export default function MultiselectProperty(props: Props) {
  const field = useFragment<MultiselectPropertyFragment$key>(
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
          options={field.options}
          multiple
          isWide={isWide}
          {...register(name)}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: MultiselectPropertyFragment$key;
}

const fragment = graphql`
  fragment MultiselectPropertyFragment on MultiselectProperty {
    ...ScalarPropertyFragment

    options {
      label
      value
    }
  }
`;
