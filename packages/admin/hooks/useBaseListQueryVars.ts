import { useRouter } from "next/router";
import get from "lodash/get";
import {
  EntityOrder,
  SimpleOrder,
  ContributorOrder,
} from "types/graphql-schema";

/**
 * Gets and returns shared list query vars, like page and order
 *
 * @returns ViewerContext state
 */
export default function useBaseListQueryVars(): {
  page: number;
  order?: EntityOrder & ContributorOrder & SimpleOrder;
} {
  const router = useRouter();
  const page = parseInt(get(router, "query.page", 1));
  const order = get(router, "query.order", "RECENT");

  return { page, order };
}
