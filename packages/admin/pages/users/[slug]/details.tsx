import React from "react";
import { graphql } from "react-relay";
import type { detailsManageSlugUsersPagesQuery as Query } from "@/relay/detailsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "types/page";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";
import UserUpdateForm from "components/composed/user/UserUpdateForm";

function UserDetails({ data }: Props) {
  if (!data || !data.user) return null;

  return <UserUpdateForm data={data.user} />;
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
      ...UserUpdateFormFragment
      ...UserLayoutQueryFragment
    }
  }
`;
