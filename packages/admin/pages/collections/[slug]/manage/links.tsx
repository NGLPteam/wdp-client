import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityLinksList from "components/composed/links/EntityLinksList";
import { AuthContextProvider } from "contexts/AuthContext";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import type { linksManageCollectionsPagesQuery as Query } from "@/relay/linksManageCollectionsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionLinks({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <EntityLinksList data={collection} headerStyle="secondary" />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["links"]} {...props} />
);

CollectionLinks.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query linksManageCollectionsPagesQuery($collectionSlug: Slug!, $page: Int!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...EntityLinksListFragment
      ...AuthContextFragment
    }
  }
`;

export default CollectionLinks;
