import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import ScalarProperty from "../ScalarProperty";
import { Email } from "components/forms/Input";
import type { EmailPropertyFragment$key } from "@/relay/EmailPropertyFragment.graphql";

export default function EmailProperty(props: Props) {
  const field = useFragment<EmailPropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Email
          label={label}
          required={required}
          isWide={isWide}
          {...register(name)}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: EmailPropertyFragment$key;
}

const fragment = graphql`
  fragment EmailPropertyFragment on EmailProperty {
    ...ScalarPropertyFragment

    address
    defaultAddress
  }
`;
