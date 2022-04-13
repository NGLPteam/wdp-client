import React from "react";
import { graphql } from "react-relay";
import { useRefetchable } from "relay-hooks";
import { QueryWrapper } from "@wdp/lib/api/components";
import AppLayout from "components/global/AppLayout";
import SearchLayout from "components/composed/search/SearchLayout";
import { searchQuery as Query } from "@/relay/searchQuery.graphql";
import { SearchLayoutQuery as LayoutQuery } from "@/relay/SearchLayoutQuery.graphql";
import { searchQueryFragment$key } from "@/relay/searchQueryFragment.graphql";

function SearchLayoutQuery({ data }: { data: searchQueryFragment$key }) {
  const {
    data: searchData,
    refetch,
    isLoading,
  } = useRefetchable<LayoutQuery, searchQueryFragment$key>(fragment, data);

  return (
    <SearchLayout data={searchData} refetch={refetch} isLoading={isLoading} />
  );
}

export default function SearchPage() {
  return (
    <QueryWrapper<Query> query={query}>
      {({ data }) => (
        <AppLayout>{data && <SearchLayoutQuery data={data} />}</AppLayout>
      )}
    </QueryWrapper>
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
  ) {
    ...SearchLayoutFragment
      @arguments(
        query: $query
        predicates: $predicates
        page: $page
        order: $order
      )
  }
`;
