import React from "react";
import { graphql } from "react-relay";
import CollectionList from "components/composed/collection/CollectionList";
import { QueryWrapper } from "components/api";
import { collectionsQuery as Query } from "__generated__/collectionsQuery.graphql";
import { collectionsSearchQuery as SearchQuery } from "__generated__/collectionsSearchQuery.graphql";
import { useBaseListQueryVars, useSearchQueryVars } from "hooks";

export default function CollectionListView() {
  const queryVars = useBaseListQueryVars();

  const searchQueryVars = useSearchQueryVars();

  return searchQueryVars.query ? (
    <QueryWrapper<SearchQuery>
      query={searchQuery}
      initialVariables={searchQueryVars}
      refetchTags={["search"]}
    >
      {({ data }) => (
        <CollectionList<SearchQuery> searchData={data?.search?.results} />
      )}
    </QueryWrapper>
  ) : (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => <CollectionList<Query> data={data?.viewer?.collections} />}
    </QueryWrapper>
  );
}

const query = graphql`
  query collectionsQuery($order: EntityOrder, $page: Int!) {
    viewer {
      collections(access: READ_ONLY, order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;

const searchQuery = graphql`
  query collectionsSearchQuery(
    $query: String
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
  ) {
    search {
      results(
        query: $query
        page: $page
        perPage: 20
        predicates: $predicates
        order: $order
      ) {
        ...CollectionListSearchFragment
      }
    }
  }
`;
