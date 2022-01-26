import React from "react";
import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import Property from "../SchemaInstanceForm/SchemaInstanceProperty";
import FormGrid from "components/forms/FormGrid";
import { ContentHeader } from "components/layout";
import SchemaSelector from "components/forms/SchemaSelector";
import type { SchemaFormFieldsFragment$key } from "@/relay/SchemaFormFieldsFragment.graphql";

export default function SchemaFormFields({
  title = "forms.schema.label",
  data,
  schemaKind,
}: Props) {
  const instance = useFragment(fragment, data);

  const { t } = useTranslation();

  return (
    <>
      <ContentHeader title={t(title)} headerStyle="secondary" />
      {instance.properties && instance.properties.length > 0 ? (
        <>
          <SchemaSelector schemaData={instance} schemaKind={schemaKind} />
          <FormGrid>
            {instance.properties.map((prop, index) => (
              <Property property={prop} key={index} />
            ))}
          </FormGrid>
        </>
      ) : (
        <SchemaSelector schemaData={instance} schemaKind={schemaKind} />
      )}
    </>
  );
}

interface Props {
  data: SchemaFormFieldsFragment$key;
  title?: string;
  schemaKind: "COLLECTION" | "ITEM" | "COMMUNITY";
}

const fragment = graphql`
  fragment SchemaFormFieldsFragment on SchemaInstance {
    properties: schemaProperties {
      ...SchemaInstancePropertyFragment
    }

    ...SchemaSelectorDataFragment
  }
`;
