import React from "react";
import { graphql } from "react-relay";
import { useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { QueryWrapper } from "components/api";
import ItemList from "components/composed/item/ItemList";
import { itemsQuery as Query } from "__generated__/itemsQuery.graphql";
import { itemsSearchQuery as SearchQuery } from "@/relay/itemsSearchQuery.graphql";

export default function ItemListView() {
  const queryVars = useBaseListQueryVars();

  const searchQueryVars = useSearchQueryVars();

  return searchQueryVars.query ||
    (searchQueryVars.predicates && searchQueryVars.predicates.length > 0) ? (
    <QueryWrapper<SearchQuery>
      query={searchQuery}
      initialVariables={searchQueryVars}
      refetchTags={["search"]}
    >
      {({ data }) => (
        <ItemList<SearchQuery> searchData={data?.search?.results} />
      )}
    </QueryWrapper>
  ) : (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => {
        return <ItemList<Query> data={data?.viewer?.items} />;
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query itemsQuery($order: EntityOrder, $page: Int!) {
    viewer {
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
  }
`;

const searchQuery = graphql`
  query itemsSearchQuery(
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
        scope: ITEM
      ) {
        ...ItemListSearchFragment
      }
    }
  }
`;
