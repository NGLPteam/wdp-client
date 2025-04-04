import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import type { announcementsManageSlugCommunitiesPagesQuery as Query } from "@/relay/announcementsManageSlugCommunitiesPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityAnnouncements({ queryRef, ...layoutProps }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout {...layoutProps} data={community}>
        <EntityAnnouncementsList data={community} headerStyle="secondary" />
      </CommunityLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["announcements"]}
    useRouteHeader={false}
    {...props}
  />
);

CommunityAnnouncements.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader?: boolean;
};

const query = graphql`
  query announcementsManageSlugCommunitiesPagesQuery(
    $communitySlug: Slug!
    $page: Int
  ) {
    community(slug: $communitySlug) {
      ...EntityAnnouncementsListFragment
      ...CommunityLayoutFragment
      ...AuthContextFragment
    }
  }
`;

export default CommunityAnnouncements;
