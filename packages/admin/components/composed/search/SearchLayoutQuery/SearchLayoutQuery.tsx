import React from "react";
import { graphql } from "react-relay";
import { useRefetchable } from "relay-hooks";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutQuery as LayoutQuery } from "@/relay/SearchLayoutQuery.graphql";
import { SearchLayoutQueryFragment$key } from "@/relay/SearchLayoutQueryFragment.graphql";

export default function SearchLayoutQuery({
  data,
}: {
  data: SearchLayoutQueryFragment$key;
}) {
  const {
    data: searchData,
    refetch,
    isLoading,
  } = useRefetchable<LayoutQuery, SearchLayoutQueryFragment$key>(
    fragment,
    data
  );

  return (
    <SearchLayout data={searchData} refetch={refetch} isLoading={isLoading} />
  );
}

const fragment = graphql`
  fragment SearchLayoutQueryFragment on Query
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
