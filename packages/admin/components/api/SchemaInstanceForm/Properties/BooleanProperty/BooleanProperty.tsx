import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import Switch from "components/forms/Switch";
import type { BooleanPropertyFragment$key } from "@/relay/BooleanPropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

/**
 * A simple boolean switch.
 */
export default function BooleanProperty(props: Props) {
  const field = useFragment<BooleanPropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Switch
          label={label}
          hideLabel
          text={label}
          required={required}
          isWide={isWide}
          {...register(name)}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: BooleanPropertyFragment$key;
}

const fragment = graphql`
  fragment BooleanPropertyFragment on BooleanProperty {
    ...ScalarPropertyFragment

    checked
    checkedByDefault
  }
`;
