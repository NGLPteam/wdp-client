import { graphql, useFragment } from "react-relay";
import { useSchemaPropertiesFragment$key } from "@/relay/useSchemaPropertiesFragment.graphql";

/**
 * Retyurns the schema default values
 *
 * @returns
 */
export default function useSchemaProperties(data: Props) {
  const schemaData = useFragment(fragment, data);

  const { properties } = schemaData;

  return properties?.map((prop) => prop?.fullPath || "") ?? [];
}

type Props = useSchemaPropertiesFragment$key;

const fragment = graphql`
  fragment useSchemaPropertiesFragment on SchemaInstance {
    properties: schemaProperties {
      ... on SchemaProperty {
        fullPath
      }
    }
  }
`;
