import type { DescendantListSelectionMode } from "@/types/graphql-schema";
import { ListEntityContext } from "@/types/graphql-schema";

export const getSeeAllHref = (
  basePath?: string | null,
  selectionMode?: DescendantListSelectionMode | null,
  identifier?: string | null,
  dynamicOrderingDefinition?: {
    filter: { schemas: readonly { namespace: string; identifier: string }[] };
  } | null,
  contextParam?: ListEntityContext,
) => {
  if (!basePath) return null;

  const queryParam = contextParam ? `?context=${contextParam}` : undefined;

  if (selectionMode === "NAMED" && !!identifier)
    return `${basePath}/browse/${identifier}/${queryParam}`;

  if (selectionMode === "DYNAMIC") {
    const schema = dynamicOrderingDefinition?.filter?.schemas[0];
    if (schema)
      return `${basePath}/browse/${encodeURIComponent(
        `${schema.namespace}:${schema.identifier}`,
      )}/${queryParam}`;
  }

  return null;
};
