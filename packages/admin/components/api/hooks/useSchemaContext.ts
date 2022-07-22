import { graphql, useFragment } from "react-relay";
import type { SchemaContextState } from "./types";
import {
  useSchemaContextFragment$key,
  useSchemaContextFragment$data,
} from "@/relay/useSchemaContextFragment.graphql";

/**
 * Retyurns the schema default values
 *
 * @returns
 */
export default function useSchemaContext(data: Props) {
  const schemaData = useFragment(fragment, data);

  return enforceContext(schemaData);
}

type Props = useSchemaContextFragment$key;

const fragment = graphql`
  fragment useSchemaContextFragment on SchemaInstanceContext {
    assets {
      kind
      label
      value
    }

    contributors {
      kind
      label
      value
    }

    defaultValues
    entityId
    fieldValues
    schemaVersionSlug
  }
`;

function enforceContext(
  context: useSchemaContextFragment$data
): SchemaContextState {
  if (isValidContext(context)) {
    return context;
  } else {
    return {
      assets: [],
      contributors: [],
      defaultValues: {},
      fieldValues: {},
      refetch: undefined,
    };
  }
}

function isValidContext(context: unknown): context is SchemaContextState {
  return Boolean(context);
}
