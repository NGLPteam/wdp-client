import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";
import type { announcementsManageSlugCollectionsPagesQuery as Query } from "@/relay/announcementsManageSlugCollectionsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionAnnouncements({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <EntityAnnouncementsList data={collection} headerStyle="secondary" />
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

CollectionAnnouncements.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query announcementsManageSlugCollectionsPagesQuery(
    $slug: Slug!
    $page: Int!
  ) {
    collection(slug: $slug) {
      ...EntityAnnouncementsListFragment
    }
  }
`;

export default CollectionAnnouncements;
