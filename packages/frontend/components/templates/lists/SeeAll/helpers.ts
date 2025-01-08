import type { DescendantListSelectionMode } from "@/types/graphql-schema";

const FEATURED_PATHS = {
  journals: "browse/nglp:journal",
  issues: "browse/issues",
  articles: "browse/articles",
};

export const getSeeAllHref = (
  basePath?: string | null,
  selectionMode?: DescendantListSelectionMode | null,
  identifier?: string | null,
  propertyPath?: string | null,
  dynamicOrderingDefinition?: {
    filter: { schemas: readonly { namespace: string; identifier: string }[] };
  } | null,
) => {
  if (!basePath) return null;

  if (selectionMode === "NAMED" && !!identifier)
    return `${basePath}/browse/${identifier}`;

  if (selectionMode === "DYNAMIC") {
    const schema = dynamicOrderingDefinition?.filter?.schemas[0];
    if (schema)
      return `${basePath}/browse/${encodeURIComponent(
        `${schema.namespace}:${schema.identifier}`,
      )}`;
  }

  if (
    selectionMode === "PROPERTY" &&
    propertyPath &&
    (propertyPath.includes("featured") || propertyPath.includes("recent"))
  ) {
    const entity = propertyPath.split(".")[1] ?? propertyPath.split("_")[1];
    const pathname = FEATURED_PATHS[entity as keyof typeof FEATURED_PATHS];
    return pathname ? `${basePath}/${pathname}` : null;
  }

  return null;
};
