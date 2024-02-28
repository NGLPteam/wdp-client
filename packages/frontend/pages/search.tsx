import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  graphql,
  usePreloadedQuery,
  PreloadedQuery,
  useRefetchableFragment,
} from "react-relay";
import { QueryLoaderWrapper, ErrorFallback } from "@wdp/lib/api/components";
import AppLayout from "components/global/AppLayout";
import SearchLayout from "components/composed/search/SearchLayout";
import { LoadingBlock } from "components/atomic";
import { searchQuery as Query } from "@/relay/searchQuery.graphql";
import { SearchLayoutQuery as LayoutQuery } from "@/relay/SearchLayoutQuery.graphql";
import { searchQueryFragment$key } from "@/relay/searchQueryFragment.graphql";

function SearchLayoutQuery({ queryRef }: Props) {
  const data = usePreloadedQuery<Query>(query, queryRef);
  const [searchData, refetch] = useRefetchableFragment<
    LayoutQuery,
    searchQueryFragment$key
  >(fragment, data);

  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <Suspense fallback={<LoadingBlock />}>
        <SearchLayout data={searchData} refetch={refetch} />
      </Suspense>
    </ErrorBoundary>
  );
}

type Props = {
  queryRef: PreloadedQuery<Query>;
};

export default function SearchPage({ queryRef }: Props) {
  return (
    <QueryLoaderWrapper<Query> query={query} initialQueryRef={queryRef}>
      {({ queryRef }) =>
        queryRef && (
          <AppLayout>
            <SearchLayoutQuery queryRef={queryRef} />
          </AppLayout>
        )
      }
    </QueryLoaderWrapper>
  );
}

const query = graphql`
  query searchQuery {
    ...searchQueryFragment
  }
`;

const fragment = graphql`
  fragment searchQueryFragment on Query
  @refetchable(queryName: "SearchLayoutQuery")
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
    schema: { type: "[String!]", defaultValue: [] }
  ) {
    ...SearchLayoutFragment
      @arguments(
        query: $query
        predicates: $predicates
        page: $page
        order: $order
        schema: $schema
      )
  }
`;
