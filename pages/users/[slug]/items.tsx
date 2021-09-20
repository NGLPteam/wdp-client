import React from "react";
import { graphql } from "react-relay";
import type { itemsManageSlugUsersPagesQuery as Query } from "@/relay/itemsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "types/page";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";

function UserItems({ data: dataIgnored }: Props) {
  return <div>User Items</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <UserLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
UserItems.getLayout = getLayout;

export default UserItems;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query itemsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
    }
  }
`;
