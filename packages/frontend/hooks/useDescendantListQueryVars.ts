import { useRouter } from "next/router";
import get from "lodash/get";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { EntityDescendantOrder } from "types/graphql-schema";

/**
 * Gets and returns descendant list query vars
 */
export default function useDescendantListQueryVars(): {
  slug: string;
  page: number;
  order: EntityDescendantOrder;
  schema: string;
  schemaSlug: string;
} {
  const router = useRouter();

  const slug = routeQueryArrayToString(router.query.slug);

  const schema = routeQueryArrayToString(router.query.schema);

  const schemaSlug = routeQueryArrayToString(router.query.schema);

  const page = parseInt(get(router, "query.page", 1) as string);

  const order = get(
    router,
    "query.order",
    "PUBLISHED_DESCENDING",
  ) as EntityDescendantOrder;

  return { slug, page, order, schema, schemaSlug };
}
