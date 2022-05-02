import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { useRefetchable } from "relay-hooks/lib/useRefetchable";
import { searchCommunityQuery as Query } from "@/relay/searchCommunityQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutEntityQuery } from "@/relay/SearchLayoutEntityQuery.graphql";
import { searchCommunityQueryFragment$key } from "@/relay/searchCommunityQueryFragment.graphql";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

function SearchLayoutQuery({
  data,
}: {
  data: searchCommunityQueryFragment$key;
}) {
  const {
    data: searchData,
    refetch,
    isLoading,
  } = useRefetchable<SearchLayoutEntityQuery, searchCommunityQueryFragment$key>(
    fragment,
    data
  );

  return (
    <SearchLayout refetch={refetch} data={searchData} isLoading={isLoading} />
  );
}

export default function SearchPage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        slug: slug || "",
      }}
    >
      {({ data }) => (
        <CommunityLayoutQuery data={data}>
          {data?.community && <SearchLayoutQuery data={data.community} />}
        </CommunityLayoutQuery>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query searchCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...searchCommunityQueryFragment
    }
    ...CommunityLayoutQueryFragment @arguments(slug: $slug)
  }
`;

const fragment = graphql`
  fragment searchCommunityQueryFragment on Entity
  @refetchable(queryName: "SearchLayoutEntityQuery")
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
