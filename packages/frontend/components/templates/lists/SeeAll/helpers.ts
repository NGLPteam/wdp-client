import { ListEntityContext } from "@/types/graphql-schema";

export const getSeeAllHref = (
  basePath?: string | null,
  identifier?: string | null,
  contextParam?: ListEntityContext,
) => {
  if (!basePath || !identifier) return null;

  const params = new URLSearchParams();

  if (contextParam) params.set("context", contextParam);

  return `${basePath}/browse/${identifier}${
    contextParam ? `?${params.toString()}` : ""
  }`;
};
