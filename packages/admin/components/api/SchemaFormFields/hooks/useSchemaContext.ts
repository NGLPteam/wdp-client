import { graphql, useFragment } from "react-relay";
import type { FieldValues } from "react-hook-form";
import {
  useSchemaContextFragment$key,
  useSchemaContextFragment$data,
} from "@/relay/useSchemaContextFragment.graphql";
import type {
  AssetSelectOption,
  ContributorSelectOption,
} from "types/graphql-schema";

/**
 * Retyurns the schema default values
 *
 * @returns
 */
export default function useSchemaContext(data: Props) {
  const schemaData = useFragment(fragment, data);

  return enforceContext(schemaData.context);
}

type Props = useSchemaContextFragment$key;

const fragment = graphql`
  fragment useSchemaContextFragment on SchemaInstance {
    context: schemaInstanceContext {
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
  }
`;

function enforceContext(
  context: useSchemaContextFragment$data["context"]
): State {
  if (isValidContext(context)) {
    return context;
  } else {
    return {
      assets: [],
      contributors: [],
      defaultValues: {},
      fieldValues: {},
    };
  }
}

function isValidContext(context: unknown): context is State {
  return Boolean(context);
}

export interface State<T extends FieldValues = FieldValues> {
  /**
   * All available assets, specific to the schema instance.
   */
  readonly assets: AssetSelectOption[];
  /**
   * All available contributors.
   */
  readonly contributors: ContributorSelectOption[];
  /**
   * Future-proofing for possible later use with create forms
   */
  readonly defaultValues: T;

  /**
   * The entity ID for the schema instance.
   */
  readonly entityId?: string;

  /**
   * The current state of the form, provided by the API.
   */
  readonly fieldValues: T;

  /**
   * The slug for the current schema version
   */
  readonly schemaVersionSlug?: string;
}
