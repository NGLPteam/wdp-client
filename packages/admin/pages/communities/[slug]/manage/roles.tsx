import { graphql } from "relay-runtime";
import type { GetLayout } from "@wdp/lib/types/page";
import type { membersManageSlugCommunitiesPagesQuery as Query } from "@/relay/membersManageSlugCommunitiesPagesQuery.graphql";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

function CommunityDetails({ data: dataIgnored }: Props) {
  return <div>Community Roles</div>;
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
  query rolesManageSlugCommunitiesPagesQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      ...CommunityLayoutQueryFragment
    }
  }
`;
