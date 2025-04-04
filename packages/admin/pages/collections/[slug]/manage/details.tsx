import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import { AuthContextProvider } from "contexts/AuthContext";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import type { detailsManageSlugCollectionsPagesQuery as Query } from "@/relay/detailsManageSlugCollectionsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionDetails({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <CollectionUpdateForm data={collection} />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["schema", "parent"]} {...props} />
);

CollectionDetails.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query detailsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...CollectionUpdateFormFragment
      ...AuthContextFragment
    }
  }
`;

export default CollectionDetails;
