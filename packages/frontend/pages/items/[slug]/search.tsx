import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { useRefetchable } from "relay-hooks/lib/useRefetchable";
import { searchItemQuery as Query } from "@/relay/searchItemQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutEntityQuery } from "@/relay/SearchLayoutEntityQuery.graphql";
import { searchItemQueryFragment$key } from "@/relay/searchItemQueryFragment.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

function SearchLayoutQuery({ data }: { data: searchItemQueryFragment$key }) {
  const {
    data: searchData,
    refetch,
    isLoading,
  } = useRefetchable<SearchLayoutEntityQuery, searchItemQueryFragment$key>(
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
        <ItemLayoutQuery data={data}>
          <EntityLayoutFactory data={data?.item}>
            {data?.item && <SearchLayoutQuery data={data.item} />}
          </EntityLayoutFactory>
        </ItemLayoutQuery>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query searchItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      ...searchItemQueryFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;

const fragment = graphql`
  fragment searchItemQueryFragment on Item
  @refetchable(queryName: "SearchLayoutItemQuery")
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
