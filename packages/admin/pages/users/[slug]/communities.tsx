import React from "react";
import { graphql } from "react-relay";
import type { communitiesManageSlugUsersPagesQuery as Query } from "@/relay/communitiesManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "types/page";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";
import UserCommunitiesList from "components/composed/user/UserCommunitiesList";

function UserCommunities({ data }: Props) {
  return (
    <UserCommunitiesList<Query> data={data?.user?.communityAccessGrants} />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <UserLayoutQuery<Query, Props>
      showSidebar
      query={query}
      {...props}
      useRouteHeader={false}
    />
  );
};
UserCommunities.getLayout = getLayout;

export default UserCommunities;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query communitiesManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder!
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutQueryFragment
      communityAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCommunitiesListFragment
      }
    }
  }
`;
