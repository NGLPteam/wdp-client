import { graphql } from "relay-runtime";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";
import UserCollectionsList from "components/composed/user/UserCollectionsList";
import type { collectionsManageSlugUsersPagesQuery as Query } from "@/relay/collectionsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function UserCollections({ data }: Props) {
  return (
    <UserCollectionsList<Query> data={data?.user?.collectionAccessGrants} />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <UserLayoutQuery<Query, Props>
      showSidebar
      query={query}
      {...props}
      useRouteHeader={false}
      refetchTags={["allAccessGrants"]}
    />
  );
};
UserCollections.getLayout = getLayout;

export default UserCollections;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutQueryFragment
      collectionAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCollectionsListFragment
      }
    }
  }
`;
