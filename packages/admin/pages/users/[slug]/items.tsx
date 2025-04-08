import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserItemsList from "components/composed/user/UserItemsList";
import type { itemsManageSlugUsersPagesQuery as Query } from "@/relay/itemsManageSlugUsersPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserItems({ queryRef }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return <UserItemsList data={user?.itemAccessGrants} />;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants"]}
    modelName="item"
    {...props}
  />
);

UserItems.getLayout = getLayout;

export default UserItems;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query itemsManageSlugUsersPagesQuery(
    $slug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $slug) {
      itemAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserItemsListFragment
      }
    }
  }
`;
