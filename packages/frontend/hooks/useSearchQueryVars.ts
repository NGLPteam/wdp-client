import { useEffect, useState } from "react";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { SearchLayoutQueryVariables } from "@/relay/SearchLayoutQuery.graphql";
import { getPredicates } from "helpers/search";
import { EntityOrder } from "types/graphql-schema";

const DEFAULTS = {
  query: "",
  predicates: [],
  page: 1,
  order: "PUBLISHED_ASCENDING" as EntityOrder,
};

/**
 * Gets and returns search list query vars
 */
export default function useSearchQueryVars(): SearchLayoutQueryVariables {
  const [vars, setVars] = useState<SearchLayoutQueryVariables>(DEFAULTS);

  const { query } = useRouter();

  useEffect(() => {
    const filters = routeQueryArrayToString(query.filters);
    const page = routeQueryArrayToString(query.page);
    const q = routeQueryArrayToString(query.q);
    const order = routeQueryArrayToString(query.order) as EntityOrder;

    const predicates = filters ? getPredicates(JSON.parse(filters)) : [];

    setVars({
      query: q || DEFAULTS.query,
      predicates: predicates || DEFAULTS.predicates,
      page: parseInt(page) || DEFAULTS.page,
      order: order || DEFAULTS.order,
    });
  }, [query, setVars]);

  return vars;
}
