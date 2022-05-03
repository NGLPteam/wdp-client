import React from "react";
import { graphql } from "react-relay";
import CollectionList from "components/composed/collection/CollectionList";
import { QueryWrapper } from "components/api";
import { collectionsQuery as Query } from "__generated__/collectionsQuery.graphql";
import { useSearchQueryVars } from "hooks";

export default function CollectionListView() {
  const searchQueryVars = useSearchQueryVars();

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...searchQueryVars, hasQuery }}
      refetchTags={["collections"]}
    >
      {({ data }) => (
        <CollectionList<Query>
          data={data?.viewer?.collections}
          searchData={data?.search}
        />
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query collectionsQuery(
    $query: String
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
    $hasQuery: Boolean!
    $schema: [String!]
  ) {
    viewer {
      collections(access: READ_ONLY, order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
    search(visibility: ALL) {
      ...CollectionListSearchFragment
        @arguments(
          query: $query
          page: $page
          predicates: $predicates
          order: $order
          hasQuery: $hasQuery
          schema: $schema
        )
    }
  }
`;
