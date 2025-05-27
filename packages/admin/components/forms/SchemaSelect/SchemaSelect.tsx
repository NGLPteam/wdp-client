import React, { forwardRef, Ref, useMemo } from "react";
import { graphql } from "react-relay";
import Select from "components/forms/Select";

import { useMaybeFragment } from "hooks";
import { useTranslation } from "react-i18next";
import { SchemaSelectFragment$key } from "@/relay/SchemaSelectFragment.graphql";
type SelectProps = React.ComponentProps<typeof Select>;

const SchemaSelect = forwardRef(
  (
    { data, schemaSlugs, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const { t } = useTranslation();
    const optionsData = useMaybeFragment(fragment, data);

    const options = useMemo(() => {
      return (
        optionsData?.schemaVersionOptions
          .filter((o) =>
            schemaSlugs && schemaSlugs?.length > 0
              ? schemaSlugs.includes(o.schemaDefinition.slug)
              : true,
          )
          .map((option) => ({
            label: option.label,
            value: option.value,
          })) || []
      );
    }, [optionsData, schemaSlugs]);

    return (
      <Select
        options={[
          { label: t("forms.fields.select_placeholder"), value: "" },
          ...options,
        ]}
        ref={ref}
        {...inputProps}
        label="forms.schema.label"
      />
    );
  },
);

interface Props extends Omit<SelectProps, "options"> {
  data?: SchemaSelectFragment$key | null;
  schemaSlugs?: string[];
  errorPath?: string;
}

export default SchemaSelect;

const fragment = graphql`
  fragment SchemaSelectFragment on Query {
    schemaVersionOptions(kind: $schemaKind) {
      label
      value
      schemaDefinition {
        slug
      }
    }
  }
`;
