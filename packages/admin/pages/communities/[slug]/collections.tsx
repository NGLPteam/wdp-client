import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import { collectionsSlugCommunitiesPagesQuery as Query } from "__generated__/collectionsSlugCommunitiesPagesQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

function CommunityChildCollections({ data }: Props) {
  return data?.community?.search ? (
    <CollectionList<Query>
      searchData={data?.community?.search?.results}
      headerStyle="secondary"
      hideHeader
    />
  ) : (
    <CollectionList<Query>
      data={data?.community?.collections}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <CommunityLayoutQuery<Query, Props> query={query} {...props} />;
};
CommunityChildCollections.getLayout = getLayout;

export default CommunityChildCollections;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsSlugCommunitiesPagesQuery(
    $order: EntityOrder
    $page: Int!
    $communitySlug: Slug!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
  ) {
    community(slug: $communitySlug) {
      ...CommunityLayoutQueryFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
      search @include(if: $hasQuery) {
        results(
          query: $query
          page: $page
          perPage: 20
          predicates: $predicates
          order: $order
          scope: COLLECTION
        ) {
          ...CollectionListSearchFragment
        }
      }
    }
  }
`;
