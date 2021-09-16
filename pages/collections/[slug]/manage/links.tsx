import React from "react";
import { graphql } from "react-relay";
import type { linksManageSlugCollectionsPagesQuery as Query } from "@/relay/linksManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionLinks({ data: dataIgnored }: Props) {
  return <div>Collection Links</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
CollectionLinks.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query linksManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
    }
  }
`;

export default CollectionLinks;
