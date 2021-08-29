import React from "react";
import { graphql } from "react-relay";
import CollectionList from "components/composed/collection/CollectionList";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import { collectionsCommunityChildQuery as Query } from "__generated__/collectionsCommunityChildQuery.graphql";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { Page } from "types/page";

const CommunityChildCollections: Page = () => {
  const queryVars = useBaseListQueryVars();

  const communitySlug = useRouteSlug();
  // TODO: This should 404 instead of returning null.
  if (!communitySlug) return null;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ communitySlug, ...queryVars }}
    >
      {({ data }) => {
        // TODO: We should 404 if there is no collection
        if (!data || !data.community) return null;
        return <CollectionList<Query> data={data?.community?.collections} />;
      }}
    </QueryWrapper>
  );
};

CommunityChildCollections.getLayout = (page) => {
  return <CommunityLayout>{page}</CommunityLayout>;
};

export default CommunityChildCollections;

const query = graphql`
  query collectionsCommunityChildQuery(
    $order: SimpleOrder!
    $page: Int!
    $communitySlug: Slug!
  ) {
    community(slug: $communitySlug) {
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;
