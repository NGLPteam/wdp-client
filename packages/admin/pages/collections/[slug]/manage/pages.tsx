import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import { AuthContextProvider } from "contexts/AuthContext";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import type { pagesManageSlugCollectionsPagesQuery as Query } from "@/relay/pagesManageSlugCollectionsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionPages({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <EntityPagesList data={collection} headerStyle="secondary" />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["pages"]} {...props} />
);

CollectionPages.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query pagesManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...EntityPagesListFragment
      ...CollectionLayoutFragment
      ...AuthContextFragment
    }
  }
`;

export default CollectionPages;
