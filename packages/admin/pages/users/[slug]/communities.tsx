import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserCommunitiesList from "components/composed/user/UserCommunitiesList";
import type { communitiesManageSlugUsersPagesQuery as Query } from "@/relay/communitiesManageSlugUsersPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserCommunities({ queryRef }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return <UserCommunitiesList data={user?.communityAccessGrants} />;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants"]}
    modelName="community"
    {...props}
  />
);

UserCommunities.getLayout = getLayout;

export default UserCommunities;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query communitiesManageSlugUsersPagesQuery(
    $slug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $slug) {
      communityAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCommunitiesListFragment
      }
    }
  }
`;
