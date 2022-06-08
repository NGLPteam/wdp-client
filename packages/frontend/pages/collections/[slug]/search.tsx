import React from "react";
import { graphql } from "react-relay";
import { useRefetchable } from "relay-hooks/lib/useRefetchable";
import { GetLayout } from "@wdp/lib/types/page";
import { searchCollectionQuery as Query } from "@/relay/searchCollectionQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutEntityQuery } from "@/relay/SearchLayoutEntityQuery.graphql";
import { searchCollectionQueryFragment$key } from "@/relay/searchCollectionQueryFragment.graphql";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery";

function SearchLayoutQuery({
  data,
}: {
  data: searchCollectionQueryFragment$key;
}) {
  const {
    data: searchData,
    refetch,
    isLoading,
  } = useRefetchable<
    SearchLayoutEntityQuery,
    searchCollectionQueryFragment$key
  >(fragment, data);

  return (
    <SearchLayout refetch={refetch} data={searchData} isLoading={isLoading} />
  );
}

export default function SearchPage({ data }: Props) {
  return data?.collection ? <SearchLayoutQuery data={data.collection} /> : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

SearchPage.getLayout = getLayout;

const query = graphql`
  query searchCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...searchCollectionQueryFragment
    }
    ...CollectionLayoutQueryFragment @arguments(slug: $slug)
  }
`;

const fragment = graphql`
  fragment searchCollectionQueryFragment on Collection
  @refetchable(queryName: "SearchLayoutCollectionQuery")
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
