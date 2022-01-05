import React, { forwardRef, Ref, useMemo } from "react";
import { graphql } from "react-relay";
import Select from "components/forms/Select";

import { SchemaSelectFragment$key } from "@/relay/SchemaSelectFragment.graphql";
import { useMaybeFragment } from "hooks";
type SelectProps = React.ComponentProps<typeof Select>;

const SchemaSelect = forwardRef(
  (
    { data, label, disabled, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const optionsData = useMaybeFragment(fragment, data);

    const options = useMemo(() => {
      return optionsData?.schemaVersionOptions.map((option) => ({
        label: option.label,
        value: option.value,
      }));
    }, [optionsData]);

    return (
      <Select
        options={options || []}
        label="forms.schema.label"
        ref={ref}
        {...inputProps}
      />
    );
  }
);

interface Props extends Omit<SelectProps, "options"> {
  data?: SchemaSelectFragment$key | null;
}

export default SchemaSelect;

const fragment = graphql`
  fragment SchemaSelectFragment on Query {
    schemaVersionOptions(kind: $schemaKind) {
      label
      value
    }
  }
`;
