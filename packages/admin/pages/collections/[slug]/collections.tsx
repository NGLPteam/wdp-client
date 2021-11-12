import React from "react";
import { graphql } from "react-relay";
import type { collectionsManageSlugCollectionsPagesQuery as Query } from "__generated__/collectionsManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

import CollectionList from "components/composed/collection/CollectionList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionChildCollections({ data }: Props) {
  return (
    <CollectionList<Query>
      data={data?.collection?.collections}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};
CollectionChildCollections.getLayout = getLayout;

export default CollectionChildCollections;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsManageSlugCollectionsPagesQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;
