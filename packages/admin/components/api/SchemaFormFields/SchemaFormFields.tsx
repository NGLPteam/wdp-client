import { useFragment, graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import FormGrid from "components/forms/FormGrid";
import { ContentHeader } from "components/layout";
import SchemaSelector from "components/forms/SchemaSelector";
import type { SchemaFormFieldsFragment$key } from "@/relay/SchemaFormFieldsFragment.graphql";
import Property from "../SchemaInstanceForm/SchemaInstanceProperty";
import { SchemaFormFieldsContextProvider } from "./SchemaFormFieldsContext";

export default function SchemaFormFields({
  title = "forms.schema.label",
  data,
  schemaKind,
}: Props) {
  const instance = useFragment(fragment, data);

  const { t } = useTranslation();

  return (
    <SchemaFormFieldsContextProvider data={instance}>
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
    </SchemaFormFieldsContextProvider>
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
    ...SchemaFormFieldsContextFragment
  }
`;
