import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CollectionSlugRedirect from "components/composed/collection/CollectionSlugRedirect";
import { AuthContextProvider } from "contexts/AuthContext";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { SlugCollectionsPageQuery as Query } from "@/relay/SlugCollectionsPageQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionSlug({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return (
    collection && (
      <AuthContextProvider data={collection}>
        <CollectionLayout data={collection}>
          <CollectionSlugRedirect data={collection} />
        </CollectionLayout>
      </AuthContextProvider>
    )
  );
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} showLoadingCircle {...props} />
);

type Props = {
  queryRef: PreloadedQuery<Query>;
};

CollectionSlug.getLayout = getLayout;

export default CollectionSlug;

const query = graphql`
  query SlugCollectionsPageQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...CollectionSlugRedirectFragment
      ...AuthContextFragment
    }
  }
`;
