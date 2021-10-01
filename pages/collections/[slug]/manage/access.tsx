import React from "react";
import { graphql } from "react-relay";
import type { accessManageSlugCollectionsPagesQuery as Query } from "@/relay/accessManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import CollectionAccessList from "components/composed/collection/CollectionAccessList/CollectionAccessList";

function CollectionAccess({ data }: Props) {
  return (
    <CollectionAccessList<Query>
      data={data?.collection}
      headerStyle="secondary"
    />
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

CollectionAccess.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query accessManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...CollectionAccessListFragment
    }
  }
`;

export default CollectionAccess;
