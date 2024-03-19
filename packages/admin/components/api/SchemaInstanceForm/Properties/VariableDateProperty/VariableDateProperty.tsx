import { useFragment, graphql } from "react-relay";
import VariablePrecisionDateControl from "components/forms/VariablePrecisionDateControl";
import type { VariableDatePropertyFragment$key } from "@/relay/VariableDatePropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

export default function VariableDateProperty(props: Props) {
  const field = useFragment<VariableDatePropertyFragment$key>(
    fragment,
    props.field,
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
