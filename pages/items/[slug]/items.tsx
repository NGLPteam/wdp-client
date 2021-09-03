import React from "react";
import { graphql } from "react-relay";
import ItemList from "components/composed/item/ItemList";
import { Page } from "types/page";
import { QueryWrapper } from "components/api";
import { useRouteSlug } from "hooks";
import { itemsItemChildQuery as Query } from "__generated__/itemsItemChildQuery.graphql";
import ItemLayout from "components/composed/item/ItemLayout";

const ItemChildItems: Page = () => {
  const itemSlug = useRouteSlug();
  // TODO: This should 404 instead of returning null.
  if (!itemSlug) return null;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ itemSlug, order: "RECENT", page: 1 }}
    >
      {({ data }) => {
        return <ItemList<Query> data={data?.item?.items} />;
      }}
    </QueryWrapper>
  );
};

ItemChildItems.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};

export default ItemChildItems;

const query = graphql`
  query itemsItemChildQuery(
    $order: SimpleOrder!
    $page: Int!
    $itemSlug: Slug!
  ) {
    item(slug: $itemSlug) {
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
  }
`;
