import React from "react";
import { graphql } from "react-relay";
import type { collectionsManageSlugUsersPagesQuery as Query } from "@/relay/collectionsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "types/page";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";

function UserCollections({ data: dataIgnored }: Props) {
  return <div>User Collections</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <UserLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
UserCollections.getLayout = getLayout;

export default UserCollections;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserLayoutQueryFragment
    }
  }
`;
