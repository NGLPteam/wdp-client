import { ListEntityContext } from "@/types/graphql-schema";

export const getSeeAllHref = (
  basePath?: string | null,
  identifier?: string | null,
  contextParam?: ListEntityContext,
  dynamicOrderingDefinition?: {
    filter: { schemas: readonly { namespace: string; identifier: string }[] };
  } | null,
) => {
  if (!basePath) return null;

  if (dynamicOrderingDefinition) {
    const schema = dynamicOrderingDefinition?.filter?.schemas[0];
    if (schema)
      return `${basePath}/browse/${encodeURIComponent(
        `${schema.namespace}:${schema.identifier}`,
      )}`;
    return null;
  }

  if (!identifier) return null;

  const params = new URLSearchParams();

  if (contextParam) params.set("context", contextParam);

  return `${basePath}/browse/${identifier}${
    contextParam ? `?${params.toString()}` : ""
  }`;
};
