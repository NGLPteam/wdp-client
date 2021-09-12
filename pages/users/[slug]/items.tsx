import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { itemsManageSlugUsersPagesQuery as Query } from "@/relay/itemsManageSlugUsersPagesQuery.graphql";

import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";

function UserItems() {
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
          User Items
        </UserLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query itemsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
    }
  }
`;

export default UserItems;
