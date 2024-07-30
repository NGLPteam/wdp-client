import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ItemList from "components/composed/item/ItemList";
import { LoadingPage } from "components/atomic";
import { itemsListQuery as Query } from "@/relay/itemsListQuery.graphql";

export default function ItemListView() {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, ...searchQueryVars, hasQuery }}
      subscribeIds={["Item"]}
      loadingFallback={<LoadingPage />}
      refetchTags={["items"]}
    >
      {({ queryRef }) =>
        queryRef ? <ListQuery queryRef={queryRef} /> : <ItemList />
      }
    </QueryTransitionWrapper>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const {
    viewer: { items },
    search,
  } = usePreloadedQuery<Query>(query, queryRef);

  return <ItemList items={items} search={search} />;
};

export const query = graphql`
  query itemsListQuery(
    $query: String
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
    $hasQuery: Boolean!
    $schema: [String!]
  ) {
    viewer {
      items(order: $order, page: $page, perPage: 20) @skip(if: $hasQuery) {
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
