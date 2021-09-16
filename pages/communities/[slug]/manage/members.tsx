import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "types/page";
import type { membersManageSlugCommunitiesPagesQuery as Query } from "@/relay/membersManageSlugCommunitiesPagesQuery.graphql";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

function CommunityDetails({ data: dataIgnored }: Props) {
  return <div>Community Members</div>;
}
const getLayout: GetLayout<Props> = (props) => {
  return (
    <CommunityLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
CommunityDetails.getLayout = getLayout;

export default CommunityDetails;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query membersManageSlugCommunitiesPagesQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      ...CommunityLayoutFragment
    }
  }
`;
