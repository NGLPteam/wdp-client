import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { itemsManageSlugUsersPagesQuery as Query } from "@/relay/itemsManageSlugUsersPagesQuery.graphql";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";
import UserItemsList from "components/composed/user/UserItemsList";

function UserItems({ data }: Props) {
  return <UserItemsList<Query> data={data?.user?.itemAccessGrants} />;
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
UserItems.getLayout = getLayout;

export default UserItems;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query itemsManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder!
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutQueryFragment
      itemAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserItemsListFragment
      }
    }
  }
`;
