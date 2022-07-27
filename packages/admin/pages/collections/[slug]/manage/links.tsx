import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { linksManageCollectionsPagesQuery as Query } from "@/relay/linksManageCollectionsPagesQuery.graphql";

import EntityLinksList from "components/composed/links/EntityLinksList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionLinks({ data }: Props) {
  if (!data || !data.collection) return null;
  return (
    <EntityLinksList<Query> data={data.collection} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      {...props}
      useRouteHeader={false}
      refetchTags={["links"]}
    />
  );
};
CollectionLinks.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query linksManageCollectionsPagesQuery($collectionSlug: Slug!, $page: Int!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...EntityLinksListFragment
    }
  }
`;

export default CollectionLinks;
