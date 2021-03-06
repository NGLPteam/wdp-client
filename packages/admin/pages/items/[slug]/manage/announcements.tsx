import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { announcementsManageSlugItemsPagesQuery as Query } from "@/relay/announcementsManageSlugItemsPagesQuery.graphql";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";

function ItemAnnouncements({ data }: Props) {
  return (
    <EntityAnnouncementsList<Query> data={data?.item} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      {...props}
    />
  );
};

ItemAnnouncements.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query announcementsManageSlugItemsPagesQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...EntityAnnouncementsListFragment
      ...ItemLayoutQueryFragment
    }
  }
`;

export default ItemAnnouncements;
