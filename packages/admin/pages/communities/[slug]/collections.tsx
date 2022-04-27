import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import { collectionsSlugCommunitiesPagesQuery as Query } from "__generated__/collectionsSlugCommunitiesPagesQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

function CommunityChildCollections({ data }: Props) {
  return (
    <CollectionList<Query>
      data={data?.community?.collections}
      searchData={data?.community?.search}
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
      search(visibility: ALL, maxDepth: 1) {
        ...CollectionListSearchFragment
          @arguments(
            query: $query
            page: $page
            predicates: $predicates
            order: $order
            hasQuery: $hasQuery
          )
      }
    }
  }
`;
