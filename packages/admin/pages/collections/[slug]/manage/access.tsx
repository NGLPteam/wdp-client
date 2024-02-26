import { graphql } from "relay-runtime";
import type { GetLayout } from "@wdp/lib/types/page";
import type { accessManageSlugCollectionsPagesQuery as Query } from "@/relay/accessManageSlugCollectionsPagesQuery.graphql";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import RoleAccessList from "components/composed/role/RoleAccessList";

function CollectionAccess({ data }: Props) {
  return (
    <RoleAccessList<Query>
      data={data?.collection}
      headerStyle="secondary"
      entityType="collection"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["allAccessGrants", "assignedUsers"]}
      {...props}
    />
  );
};

CollectionAccess.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query accessManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...RoleAccessListFragment
    }
  }
`;

export default CollectionAccess;
