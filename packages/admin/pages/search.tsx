import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useIsAuthenticated, useSearchQueryVars } from "hooks";
import { searchQuery as Query } from "__generated__/searchQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";

export default function Search() {
  const isAuth = useIsAuthenticated();

  const searchQuery = useSearchQueryVars();

  return isAuth ? (
    <QueryWrapper<Query> query={query} initialVariables={searchQuery}>
      {({ data }) => <SearchLayout data={data} />}
    </QueryWrapper>
  ) : null;
}

const query = graphql`
  query searchQuery(
    $query: String
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
    $schema: [String!]
  ) {
    ...SearchLayoutFragment
      @arguments(
        query: $query
        page: $page
        predicates: $predicates
        order: $order
        schema: $schema
      )
  }
`;
