import { useEffect, useState } from "react";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { ContributorOrder } from "types/graphql-schema";

const DEFAULTS = {
  query: "",
  predicates: [],
  page: 1,
  order: "RECENT" as ContributorOrder,
};

interface Props {
  order?: ContributorOrder | null | undefined;
  page: number;
  query?: string | null | undefined;
}

/**
 * Gets and returns contributor search query vars
 */
export default function useContributorQueryVars(): Props {
  const [vars, setVars] = useState<Props>(DEFAULTS);

  const { query } = useRouter();

  useEffect(() => {
    const page = routeQueryArrayToString(query.page);
    const q = routeQueryArrayToString(query.q);
    const order = routeQueryArrayToString(query.order) as ContributorOrder;

    setVars({
      query: q || DEFAULTS.query,
      page: parseInt(page) || DEFAULTS.page,
      order: order || DEFAULTS.order,
    });
  }, [query, setVars]);

  return vars;
}
