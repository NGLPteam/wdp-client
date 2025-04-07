import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";
import type { announcementsManageSlugItemsPagesQuery as Query } from "@/relay/announcementsManageSlugItemsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemAnnouncements({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <EntityAnnouncementsList data={item} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["announcements"]}
    modelName="announcement"
    {...props}
  />
);

ItemAnnouncements.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query announcementsManageSlugItemsPagesQuery($slug: Slug!, $page: Int) {
    item(slug: $slug) {
      ...EntityAnnouncementsListFragment
    }
  }
`;

export default ItemAnnouncements;
