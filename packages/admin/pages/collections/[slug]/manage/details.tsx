import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import type { detailsManageSlugCollectionsPagesQuery as Query } from "@/relay/detailsManageSlugCollectionsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionDetails({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? <CollectionUpdateForm data={collection} /> : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["schema", "parent"]}
    showLoadingCircle
    {...props}
  />
);

CollectionDetails.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsManageSlugCollectionsPagesQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...CollectionUpdateFormFragment
    }
  }
`;

export default CollectionDetails;
