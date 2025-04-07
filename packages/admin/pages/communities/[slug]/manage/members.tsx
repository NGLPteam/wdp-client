import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import RoleAccessList from "components/composed/role/RoleAccessList";
import type { membersManageSlugCommunitiesPagesQuery as Query } from "@/relay/membersManageSlugCommunitiesPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityMembers({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <RoleAccessList
      data={community}
      headerStyle="secondary"
      header="nav.members"
      entityType="community"
    />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants", "assignedUsers"]}
    modelName="member"
    {...props}
  />
);

CommunityMembers.getLayout = getLayout;

export default CommunityMembers;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query membersManageSlugCommunitiesPagesQuery($slug: Slug!, $page: Int!) {
    community(slug: $slug) {
      ...RoleAccessListFragment
    }
  }
`;
