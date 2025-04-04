import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserItemsList from "components/composed/user/UserItemsList";
import UserLayout from "components/composed/user/UserLayout";
import type { itemsManageSlugUsersPagesQuery as Query } from "@/relay/itemsManageSlugUsersPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserItems({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <UserLayout {...layoutProps} data={user}>
      <UserItemsList data={user?.itemAccessGrants} />
    </UserLayout>
  );
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants"]}
    useRouteHeader={false}
    {...props}
  />
);

UserItems.getLayout = getLayout;

export default UserItems;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader?: boolean;
};

const query = graphql`
  query itemsManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
      itemAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserItemsListFragment
      }
    }
  }
`;
