import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { announcementsManageSlugCollectionsPagesQuery as Query } from "@/relay/announcementsManageSlugCollectionsPagesQuery.graphql";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";

function CollectionAnnouncements({ data }: Props) {
  return (
    <EntityAnnouncementsList<Query>
      data={data?.collection}
      headerStyle="secondary"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      {...props}
    />
  );
};

CollectionAnnouncements.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query announcementsManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...EntityAnnouncementsListFragment
      ...CollectionLayoutQueryFragment
    }
  }
`;

export default CollectionAnnouncements;
