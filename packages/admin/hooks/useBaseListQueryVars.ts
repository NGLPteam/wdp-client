import { useRouter } from "next/router";
import get from "lodash/get";
import {
  EntityOrder,
  SimpleOrder,
  ContributorOrder,
  ContributionOrder,
} from "types/graphql-schema";

interface Props {
  defaultOrder: string;
}

export type Order = EntityOrder &
  ContributorOrder &
  SimpleOrder &
  ContributionOrder;

/**
 * Gets and returns shared list query vars, like page and order
 *
 * @returns ViewerContext state
 */
export default function useBaseListQueryVars(
  { defaultOrder }: Props = { defaultOrder: "RECENT" },
): {
  page: number;
  order?: Order;
} {
  const router = useRouter();
  const page = parseInt(get(router, "query.page", 1) as string);
  const order = (get(router, "query.order") || defaultOrder) as Order;

  return { page, order };
}
