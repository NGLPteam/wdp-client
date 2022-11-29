import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { membersManageSlugCommunitiesPagesQuery as Query } from "@/relay/membersManageSlugCommunitiesPagesQuery.graphql";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import RoleAccessList from "components/composed/role/RoleAccessList";

function CommunityDetails({ data }: Props) {
  return (
    <RoleAccessList<Query>
      data={data?.community}
      headerStyle="secondary"
      header="nav.members"
      entityType="community"
    />
  );
}
const getLayout: GetLayout<Props> = (props) => {
  return (
    <CommunityLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["allAccessGrants", "assignedUsers"]}
      {...props}
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
      ...RoleAccessListFragment
    }
  }
`;
