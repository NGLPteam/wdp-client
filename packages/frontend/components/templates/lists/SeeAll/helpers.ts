import type { DescendantListSelectionMode } from "@/types/graphql-schema";

const FEATURED_PATHS = {
  journals: "collections/nglp:journal",
  articles: "browse/articles",
};

export const getSeeAllHref = (
  basePath?: string | null,
  selectionMode?: DescendantListSelectionMode | null,
  identifier?: string | null,
  propertyPath?: string | null,
) => {
  if (!basePath) return null;

  if (selectionMode === "NAMED" && !!identifier)
    return `${basePath}/${identifier}`;

  if (
    selectionMode === "PROPERTY" &&
    propertyPath &&
    propertyPath.includes("featured")
  ) {
    const entity = propertyPath.split(".")[1];
    const pathname = FEATURED_PATHS[entity as keyof typeof FEATURED_PATHS];
    return pathname ? `${basePath}/${pathname}` : null;
  }

  return null;
};
