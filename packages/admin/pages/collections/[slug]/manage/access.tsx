import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import RoleAccessList from "components/composed/role/RoleAccessList";
import type { accessManageSlugCollectionsPagesQuery as Query } from "@/relay/accessManageSlugCollectionsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionAccess({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <RoleAccessList
      data={collection}
      headerStyle="secondary"
      entityType="collection"
    />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants", "assignedUsers"]}
    modelName="access"
    {...props}
  />
);

CollectionAccess.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query accessManageSlugCollectionsPagesQuery($slug: Slug!, $page: Int!) {
    collection(slug: $slug) {
      ...RoleAccessListFragment
    }
  }
`;

export default CollectionAccess;
