import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { detailsManageSlugCollectionsPagesQuery as Query } from "@/relay/detailsManageSlugCollectionsPagesQuery.graphql";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import { LoadingCircle } from "components/atomic";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";

function CollectionDetails({ data }: Props) {
  return data && data.collection ? (
    <CollectionUpdateForm data={data?.collection} />
  ) : (
    <LoadingCircle className="l-page-loading" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
CollectionDetails.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query detailsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...CollectionUpdateFormFragment
    }
  }
`;

export default CollectionDetails;
