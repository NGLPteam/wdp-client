import React from "react";
import { graphql } from "react-relay";
import ItemList from "components/composed/item/ItemList";
import { itemsCollectionChildQuery as Query } from "__generated__/itemsCollectionChildQuery.graphql";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { Page } from "types/page";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";

const CollectionChildItems: Page = () => {
  const queryVars = useBaseListQueryVars();

  const collectionSlug = useRouteSlug();
  // TODO: This should 404 instead of returning null.
  if (!collectionSlug) return null;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, collectionSlug }}
    >
      {({ data }) => {
        // TODO: We should 404 if there is no collection
        if (!data || !data.collection) return null;
        return <ItemList<Query> data={data?.collection?.items} />;
      }}
    </QueryWrapper>
  );
};

CollectionChildItems.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};

export default CollectionChildItems;

const query = graphql`
  query itemsCollectionChildQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
  }
`;
