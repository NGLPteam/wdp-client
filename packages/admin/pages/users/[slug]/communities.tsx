import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserCommunitiesList from "components/composed/user/UserCommunitiesList";
import UserLayout from "components/composed/user/UserLayout";
import type { communitiesManageSlugUsersPagesQuery as Query } from "@/relay/communitiesManageSlugUsersPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserCommunities({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <UserLayout {...layoutProps} data={user}>
      <UserCommunitiesList data={user?.communityAccessGrants} />
    </UserLayout>
  );
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants"]}
    useRouteHeader={false}
    {...props}
  />
);

UserCommunities.getLayout = getLayout;

export default UserCommunities;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader?: boolean;
};

const query = graphql`
  query communitiesManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
      communityAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCommunitiesListFragment
      }
    }
  }
`;
