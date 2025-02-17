import { useFragment, graphql } from "react-relay";
import { Controller, useFormContext } from "react-hook-form";
import FullTextInput from "components/forms/FullTextInput";
import type { FullTextPropertyFragment$key } from "@/relay/FullTextPropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

export default function FullTextProperty(props: Props) {
  const field = useFragment<FullTextPropertyFragment$key>(
    fragment,
    props.field,
  );

  const { control } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Controller
          name={name}
          control={control}
          defaultValue={field?.fullText}
          render={({ field }) => (
            <FullTextInput
              label={label}
              required={required}
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
  field: FullTextPropertyFragment$key;
}

const fragment = graphql`
  fragment FullTextPropertyFragment on FullTextProperty {
    ...ScalarPropertyFragment

    description
    fullText {
      content
      kind
      lang
    }
  }
`;
