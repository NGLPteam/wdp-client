import React from "react";
import { graphql } from "react-relay";
import type { detailsManageSlugCommunitiesPagesQuery as Query } from "@/relay/detailsManageSlugCommunitiesPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CommunityUpdateForm from "components/composed/community/CommunityUpdateForm";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

function CommunityDetails({ data }: Props) {
  if (!data || !data.community) return null;

  return <CommunityUpdateForm data={data?.community} />;
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
  query detailsManageSlugCommunitiesPagesQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      ...CommunityUpdateFormFragment
      ...CommunityLayoutFragment
    }
  }
`;
