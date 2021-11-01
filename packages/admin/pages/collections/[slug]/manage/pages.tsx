import React from "react";
import { graphql } from "react-relay";
import type { pagesManageSlugCollectionsPagesQuery as Query } from "@/relay/pagesManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import EntityPagesList from "components/composed/pages/EntityPagesList";

function CollectionPages({ data }: Props) {
  return (
    <EntityPagesList<Query> data={data?.collection} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      {...props}
    />
  );
};

CollectionPages.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query pagesManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...EntityPagesListFragment
      ...CollectionLayoutQueryFragment
    }
  }
`;

export default CollectionPages;
