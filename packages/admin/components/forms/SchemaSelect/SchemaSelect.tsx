import React, { forwardRef, Ref, useMemo } from "react";
import { graphql } from "react-relay";
import Select from "components/forms/Select";

import { SchemaSelectFragment$key } from "@/relay/SchemaSelectFragment.graphql";
import { useMaybeFragment } from "hooks";
import { SchemaSelectParentFragment$key } from "@/relay/SchemaSelectParentFragment.graphql";
type SelectProps = React.ComponentProps<typeof Select>;

const SchemaSelect = forwardRef(
  (
    { data, parentData, label, disabled, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const optionsData = useMaybeFragment(fragment, data);

    const parent = useMaybeFragment(ranksFragment, parentData);

    const options = useMemo(() => {
      return optionsData?.schemaVersionOptions
        .filter((option) => {
          if (parent?.schemaRanks) {
            return parent.schemaRanks.some(
              (schema) =>
                schema.identifier === option.identifier &&
                schema.namespace === option.namespace
            );
          }

          return true;
        })
        .map((option) => ({
          label: option.label,
          value: option.value,
        }));
    }, [optionsData, parent]);

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
  // eslint-disable-next-line camelcase
  parentData?: SchemaSelectParentFragment$key | null;
}

export default SchemaSelect;

const fragment = graphql`
  fragment SchemaSelectFragment on Query {
    schemaVersionOptions(kind: $schemaKind) {
      label
      value
      identifier
      namespace
    }
  }
`;

const ranksFragment = graphql`
  fragment SchemaSelectParentFragment on Entity {
    schemaRanks {
      identifier
      namespace
      kind
    }
  }
`;
