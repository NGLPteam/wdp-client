import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import Select from "components/forms/Select";
import type { ContributorPropertyFragment$key } from "@/relay/ContributorPropertyFragment.graphql";
import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";

export default function ContributorProperty(props: Props) {
  const { contributors: options } = useSchemaFormContext();

  const field = useFragment<ContributorPropertyFragment$key>(
    fragment,
    props.field,
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
