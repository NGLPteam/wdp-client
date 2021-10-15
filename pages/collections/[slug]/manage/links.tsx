import React from "react";
import { graphql } from "react-relay";
import type { linksManageSlugCollectionsPagesQuery as Query } from "@/relay/linksManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import EntityLinksList from "components/composed/links/EntityLinksList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionLinks({ data }: Props) {
  return (
    <EntityLinksList<Query> data={data?.collection} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      {...props}
      useRouteHeader={false}
    />
  );
};
CollectionLinks.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query linksManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...EntityLinksListFragment
    }
  }
`;

export default CollectionLinks;
