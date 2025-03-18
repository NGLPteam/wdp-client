import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import RoleAccessList from "components/composed/role/RoleAccessList";
import { AuthContextProvider } from "contexts/AuthContext";
import type { accessManageSlugCollectionsPagesQuery as Query } from "@/relay/accessManageSlugCollectionsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionAccess({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <RoleAccessList
          data={collection}
          headerStyle="secondary"
          entityType="collection"
        />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants", "assignedUsers"]}
    {...props}
  />
);

CollectionAccess.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query accessManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...RoleAccessListFragment
      ...AuthContextFragment
    }
  }
`;

export default CollectionAccess;
