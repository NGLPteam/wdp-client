import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import ScalarProperty from "../ScalarProperty";
import type { VariableDatePropertyFragment$key } from "@/relay/VariableDatePropertyFragment.graphql";
import VariablePrecisionDateControl from "components/forms/VariablePrecisionDateControl";

export default function VariableDateProperty(props: Props) {
  const field = useFragment<VariableDatePropertyFragment$key>(
    fragment,
    props.field
  );

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <VariablePrecisionDateControl
          name={name}
          data={field?.dateWithPrecision}
          label={label}
          required={required}
          isWide={isWide}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: VariableDatePropertyFragment$key;
}

const fragment = graphql`
  fragment VariableDatePropertyFragment on VariableDateProperty {
    ...ScalarPropertyFragment

    dateWithPrecision {
      ...VariablePrecisionDateControlFragment
    }
  }
`;
