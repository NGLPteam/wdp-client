import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserCollectionsList from "components/composed/user/UserCollectionsList";
import type { collectionsManageSlugUsersPagesQuery as Query } from "@/relay/collectionsManageSlugUsersPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserCollections({ queryRef }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return <UserCollectionsList data={user?.collectionAccessGrants} />;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants"]}
    modelName="collection"
    {...props}
  />
);

UserCollections.getLayout = getLayout;

export default UserCollections;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query collectionsManageSlugUsersPagesQuery(
    $slug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $slug) {
      collectionAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCollectionsListFragment
      }
    }
  }
`;
