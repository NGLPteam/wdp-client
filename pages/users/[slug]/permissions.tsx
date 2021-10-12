import React from "react";
import { graphql } from "react-relay";
import type { permissionsManageSlugUsersPagesQuery as Query } from "@/relay/permissionsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "types/page";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";

function UserPermissions({ data: dataIgnored }: Props) {
  return <div>User Permissions</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <UserLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
UserPermissions.getLayout = getLayout;

export default UserPermissions;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query permissionsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserLayoutQueryFragment
    }
  }
`;
