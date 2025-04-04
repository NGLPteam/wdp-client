import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";
import { AuthContextProvider } from "contexts/AuthContext";
import ItemLayout from "components/composed/item/ItemLayout";
import type { announcementsManageSlugItemsPagesQuery as Query } from "@/relay/announcementsManageSlugItemsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemAnnouncements({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <EntityAnnouncementsList data={item} headerStyle="secondary" />
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["announcements"]} {...props} />
);

ItemAnnouncements.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query announcementsManageSlugItemsPagesQuery($itemSlug: Slug!, $page: Int) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...AuthContextFragment
      ...EntityAnnouncementsListFragment
    }
  }
`;

export default ItemAnnouncements;
