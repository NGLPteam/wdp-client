import React from "react";
import { graphql } from "react-relay";
import type { pagesManageSlugCollectionsPagesQuery as Query } from "@/relay/pagesManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionPages({ data: dataIgnored }: Props) {
  return <div>Collection Pages</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
CollectionPages.getLayout = getLayout;
type Props = {
  data: Query["response"];
};

const query = graphql`
  query pagesManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
    }
  }
`;

export default CollectionPages;
