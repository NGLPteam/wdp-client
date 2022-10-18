import { useRouter } from "next/router";
import get from "lodash/get";
import {
  EntityOrder,
  SimpleOrder,
  ContributorOrder,
} from "types/graphql-schema";

interface Props {
  defaultOrder: string;
}

/**
 * Gets and returns shared list query vars, like page and order
 *
 * @returns ViewerContext state
 */
export default function useBaseListQueryVars(
  { defaultOrder }: Props = { defaultOrder: "RECENT" }
): {
  page: number;
  order?: EntityOrder & ContributorOrder & SimpleOrder;
} {
  const router = useRouter();
  const page = parseInt(get(router, "query.page", 1));
  const order = get(router, "query.order") || defaultOrder;

  return { page, order };
}
