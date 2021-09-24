import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import { Email } from "components/forms/Input";
import ScalarProperty from "../ScalarProperty";
import type { EmailPropertyFragment$key } from "@/relay/EmailPropertyFragment.graphql";

export default function EmailProperty(props: Props) {
  const field = useFragment<EmailPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Email label={label} required={required} {...register} />
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
