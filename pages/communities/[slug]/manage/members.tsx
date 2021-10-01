import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "types/page";
import type { membersManageSlugCommunitiesPagesQuery as Query } from "@/relay/membersManageSlugCommunitiesPagesQuery.graphql";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import CommunityMemberList from "components/composed/community/CommunityMemberList/CommunityMemberList";

function CommunityDetails({ data }: Props) {
  return (
    <CommunityMemberList<Query>
      data={data?.community}
      headerStyle="secondary"
      header="navLabels.members"
    />
  );
}
const getLayout: GetLayout<Props> = (props) => {
  return (
    <CommunityLayoutQuery<Query, Props>
      showSidebar
      query={query}
      {...props}
      useRouteHeader={false}
    />
  );
};
CommunityDetails.getLayout = getLayout;

export default CommunityDetails;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query membersManageSlugCommunitiesPagesQuery(
    $communitySlug: Slug!
    $page: Int!
  ) {
    community(slug: $communitySlug) {
      ...CommunityLayoutQueryFragment
      ...CommunityMemberListFragment
    }
  }
`;
