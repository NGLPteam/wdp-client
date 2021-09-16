import React from "react";
import { graphql } from "react-relay";
import type { orderManageSlugCollectionsPagesQuery as Query } from "@/relay/orderManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionOrder({ data: dataIgnored }: Props) {
  return <div>Collection Order</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
CollectionOrder.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query orderManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
    }
  }
`;

export default CollectionOrder;
