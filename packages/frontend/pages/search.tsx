import React from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";
import { QueryWrapper } from "@wdp/lib/api/components";
import SearchLayout from "components/composed/search/SearchLayout";
import AppLayout from "components/global/AppLayout";
import {
  SearchPredicateInput,
  searchQuery as Query,
  searchQueryVariables,
} from "@/relay/searchQuery.graphql";
import { EntityOrder } from "types/graphql-schema";

// Example predicates value: [{matches: {path: "$core.title", value: "Issues"}}]
function getPredicates(
  filters: Record<string, string>
): [SearchPredicateInput] | undefined {
  const predicates: [SearchPredicateInput?] = [];

  Object.keys(filters).forEach((key) => {
    const pairs = key.split("--");

    if (!pairs || pairs.length !== 2) return;

    const operator = pairs[1];
    const path = pairs[0].replace("-", ".");
    const value = filters[key];

    predicates.push({
      [operator]: { path, value },
    });
  });

  return predicates ? (predicates as [SearchPredicateInput]) : undefined;
}

export default function SearchPage() {
  const { query: queryVars } = useRouter();
  const q = routeQueryArrayToString(queryVars.q);
  const page = routeQueryArrayToString(queryVars.page);
  const filters = routeQueryArrayToString(queryVars.filters);
  const order = routeQueryArrayToString(queryVars.order) as EntityOrder;

  const predicates = filters ? getPredicates(JSON.parse(filters)) : [];

  const variables: searchQueryVariables = {
    query: q,
    page: page ? parseInt(page) : 1,
    predicates,
    order: order || "PUBLISHED_DESCENDING",
  };

  return (
    <QueryWrapper<Query> query={query} initialVariables={variables}>
      {({ data }) => (
        <AppLayout>
          <SearchLayout data={data} />
        </AppLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query searchQuery(
    $query: String
    $page: Int
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
  ) {
    ...SearchLayoutFragment
      @arguments(
        query: $query
        page: $page
        predicates: $predicates
        order: $order
      )
  }
`;
