import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { permissionsManageSlugUsersPagesQuery as Query } from "@/relay/permissionsManageSlugUsersPagesQuery.graphql";

import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";

function UserPermissions() {
  const queryVars = useBaseListQueryVars();
  const userSlug = useRouteSlug();
  if (!userSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, userSlug }}
    >
      {({ data }) => (
        <UserLayout showSidebar data={data?.user}>
          User Permissions
        </UserLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query permissionsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
    }
  }
`;

export default UserPermissions;
