import React from "react";
import { graphql } from "react-relay";
import type { detailsManageSlugUsersPagesQuery as Query } from "@/relay/detailsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "types/page";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";

function UserDetails({ data: dataIgnored }: Props) {
  return <div>User Details</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <UserLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
UserDetails.getLayout = getLayout;

export default UserDetails;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query detailsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserLayoutQueryFragment
    }
  }
`;
