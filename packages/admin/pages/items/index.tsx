import React from "react";
import { graphql } from "react-relay";
import { useSearchQueryVars } from "hooks";
import { QueryWrapper } from "components/api";
import ItemList from "components/composed/item/ItemList";
import { itemsQuery as Query } from "__generated__/itemsQuery.graphql";

export default function ItemListView() {
  const searchQueryVars = useSearchQueryVars();

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...searchQueryVars, hasQuery }}
      refetchTags={["items"]}
    >
      {({ data }) => {
        return (
          <ItemList<Query>
            data={data?.viewer?.items}
            searchData={data?.search}
          />
        );
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query itemsQuery(
    $query: String
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
    $hasQuery: Boolean!
    $schema: [String!]
  ) {
    viewer {
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
    search(visibility: ALL) {
      ...ItemListSearchFragment
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
