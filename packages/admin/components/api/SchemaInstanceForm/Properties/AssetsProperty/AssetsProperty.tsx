import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useSchemaFormContext } from "../../Context";
import ScalarProperty from "../ScalarProperty";
import type { AssetsPropertyFragment$key } from "@/relay/AssetsPropertyFragment.graphql";
import { AssetsPropertyControl } from "components/forms";

export default function AssetsProperty(props: Props) {
  const { assets: options } = useSchemaFormContext();

  const field = useFragment<AssetsPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <AssetsPropertyControl
          label={label}
          required={required}
          options={options}
          isWide={isWide}
          name={name}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: AssetsPropertyFragment$key;
}

const fragment = graphql`
  fragment AssetsPropertyFragment on AssetsProperty {
    ...ScalarPropertyFragment
  }
`;
