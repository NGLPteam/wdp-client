import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import CollectionList from "components/composed/collection/CollectionList";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import { LoadingPage } from "components/atomic/loading";
import { collectionsListQuery as Query } from "@/relay/collectionsListQuery.graphql";

export default function CollectionListView() {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, ...searchQueryVars, hasQuery }}
      subscribeIds={["Collection"]}
      loadingFallback={<LoadingPage />}
      refetchTags={["collections"]}
    >
      {({ queryRef }) =>
        queryRef ? <ListQuery queryRef={queryRef} /> : <CollectionList />
      }
    </QueryTransitionWrapper>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  const {
    viewer: { collections },
    search,
  } = data;

  return <CollectionList collections={collections} search={search} />;
};

export const query = graphql`
  query collectionsListQuery(
    $query: String
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
    $hasQuery: Boolean!
    $schema: [String!]
  ) {
    viewer {
      collections(access: READ_ONLY, order: $order, page: $page, perPage: 20)
        @skip(if: $hasQuery) {
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
