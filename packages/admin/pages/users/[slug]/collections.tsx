import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserCollectionsList from "components/composed/user/UserCollectionsList";
import UserLayout from "components/composed/user/UserLayout";
import type { collectionsManageSlugUsersPagesQuery as Query } from "@/relay/collectionsManageSlugUsersPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserCollections({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <UserLayout {...layoutProps} data={user}>
      <UserCollectionsList data={user?.collectionAccessGrants} />
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

UserCollections.getLayout = getLayout;

export default UserCollections;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader?: boolean;
};

const query = graphql`
  query collectionsManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
      collectionAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCollectionsListFragment
      }
    }
  }
`;
