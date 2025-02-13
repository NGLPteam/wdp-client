import { useFragment, graphql } from "react-relay";
import FormGrid from "components/forms/FormGrid";
import SchemaSelector from "components/forms/SchemaSelector";
import type { SchemaFormFieldsFragment$key } from "@/relay/SchemaFormFieldsFragment.graphql";
import Property from "../SchemaInstanceForm/SchemaInstanceProperty";
import { SchemaFormFieldsContextProvider } from "./SchemaFormFieldsContext";

export default function SchemaFormFields({
  title = "forms.schema.label",
  data,
  schemaKind,
  schemaSlugs,
}: Props) {
  const instance = useFragment(fragment, data);

  const { featured, properties } = instance;

  const showForm =
    properties.length > 1 || (properties.length === 1 && !featured);

  return (
    <SchemaFormFieldsContextProvider data={instance}>
      <SchemaSelector
        schemaData={instance}
        schemaKind={schemaKind}
        schemaSlugs={schemaSlugs}
        title={title}
        showHeader={showForm}
      />
      {showForm && (
        <FormGrid>
          {instance.properties.map((prop, index) => (
            <Property property={prop} key={index} schemaKind={schemaKind} />
          ))}
        </FormGrid>
      )}
    </SchemaFormFieldsContextProvider>
  );
}

interface Props {
  data: SchemaFormFieldsFragment$key;
  title?: string;
  schemaKind: "COLLECTION" | "ITEM" | "COMMUNITY";
  // Filter options by these schema slugs
  schemaSlugs?: string[];
}

const fragment = graphql`
  fragment SchemaFormFieldsFragment on SchemaInstance {
    properties: schemaProperties {
      ...SchemaInstancePropertyFragment
    }
    featured: schemaProperty(fullPath: "featured") {
      ... on GroupProperty {
        legend
      }
    }

    ...SchemaSelectorDataFragment
    ...SchemaFormFieldsContextFragment
  }
`;
