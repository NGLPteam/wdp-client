import { graphql } from "relay-runtime";
import type { GetLayout } from "@wdp/lib/types/page";
import type { announcementsManageSlugCommunitiesPagesQuery as Query } from "@/relay/announcementsManageSlugCommunitiesPagesQuery.graphql";

import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";

function CommunityAnnouncements({ data }: Props) {
  return (
    <EntityAnnouncementsList<Query>
      data={data?.community}
      headerStyle="secondary"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CommunityLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["announcements"]}
      {...props}
    />
  );
};

CommunityAnnouncements.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query announcementsManageSlugCommunitiesPagesQuery(
    $communitySlug: Slug!
    $page: Int!
  ) {
    community(slug: $communitySlug) {
      ...EntityAnnouncementsListFragment
      ...CommunityLayoutQueryFragment
    }
  }
`;

export default CommunityAnnouncements;
