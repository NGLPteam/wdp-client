import React from "react";
import { graphql } from "react-relay";
import type { communitiesManageSlugUsersPagesQuery as Query } from "@/relay/communitiesManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "types/page";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";

function UserCommunities({ data: dataIgnored }: Props) {
  return <div>User Communities</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <UserLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
UserCommunities.getLayout = getLayout;

export default UserCommunities;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query communitiesManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserLayoutQueryFragment
    }
  }
`;
