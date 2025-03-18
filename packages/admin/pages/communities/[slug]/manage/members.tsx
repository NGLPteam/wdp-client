import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import RoleAccessList from "components/composed/role/RoleAccessList";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import type { membersManageSlugCommunitiesPagesQuery as Query } from "@/relay/membersManageSlugCommunitiesPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityMembers({ queryRef, ...layoutProps }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout {...layoutProps} data={community}>
        <RoleAccessList
          data={community}
          headerStyle="secondary"
          header="nav.members"
          entityType="community"
        />
      </CommunityLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants", "assignedUsers"]}
    useRouteHeader={false}
    {...props}
  />
);

CommunityMembers.getLayout = getLayout;

export default CommunityMembers;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader?: boolean;
};

const query = graphql`
  query membersManageSlugCommunitiesPagesQuery(
    $communitySlug: Slug!
    $page: Int!
  ) {
    community(slug: $communitySlug) {
      ...CommunityLayoutFragment
      ...RoleAccessListFragment
      ...AuthContextFragment
    }
  }
`;
