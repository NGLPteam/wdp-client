import React from "react";
import { graphql } from "react-relay";
import type { orderManageSlugOrderingsPagesQuery as Query } from "@/relay/orderManageSlugOrderingsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";

function CollectionOrder({ data }: Props) {
  return (
    <EntityOrderingList<Query>
      data={data?.collection?.orderings}
      headerStyle="secondary"
    />
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
CollectionOrder.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query orderManageSlugOrderingsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      orderings(page: $page, perPage: 20) {
        ...EntityOrderingListFragment
      }
    }
  }
`;

export default CollectionOrder;
