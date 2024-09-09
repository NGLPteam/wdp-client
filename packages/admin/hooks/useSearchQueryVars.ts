import { useEffect, useState } from "react";
import {
  normalizeRouteQueryArray,
  routeQueryArrayToString,
} from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { getPredicates } from "helpers/search";
import { EntityOrder, SearchPredicateInput } from "types/graphql-schema";

const DEFAULTS = {
  query: "",
  predicates: [],
  page: 1,
  order: "PUBLISHED_ASCENDING" as EntityOrder,
  hasQuery: false,
};

interface Props {
  order?: EntityOrder | null | undefined;
  page: number;
  predicates?: SearchPredicateInput[] | null | undefined;
  query?: string | null | undefined;
  schema?: string[];
  hasQuery: boolean;
}

/**
 * Gets and returns search list query vars
 */
export default function useSearchQueryVars(): Props {
  const [vars, setVars] = useState<Props>(DEFAULTS);

  const { query } = useRouter();

  useEffect(() => {
    const filters = routeQueryArrayToString(query.filters);
    const page = routeQueryArrayToString(query.page);
    const q = routeQueryArrayToString(query.q);
    const order = routeQueryArrayToString(query.order) as EntityOrder;
    const schema = normalizeRouteQueryArray(query.schema);

    const predicates = filters ? getPredicates(JSON.parse(filters)) : [];

    setVars({
      query: q || DEFAULTS.query,
      predicates: predicates || DEFAULTS.predicates,
      page: parseInt(page) || DEFAULTS.page,
      order: order || DEFAULTS.order,
      schema,
      hasQuery:
        (!!predicates && predicates.length > 0) ||
        (!!schema && schema.length > 0) ||
        !!q,
    });
  }, [query, setVars]);

  return vars;
}
