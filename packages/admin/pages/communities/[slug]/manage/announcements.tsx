import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";
import type { announcementsManageSlugCommunitiesPagesQuery as Query } from "@/relay/announcementsManageSlugCommunitiesPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityAnnouncements({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <EntityAnnouncementsList data={community} headerStyle="secondary" />
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

CommunityAnnouncements.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query announcementsManageSlugCommunitiesPagesQuery($slug: Slug!, $page: Int) {
    community(slug: $slug) {
      ...EntityAnnouncementsListFragment
      ...AuthContextFragment
    }
  }
`;

export default CommunityAnnouncements;
