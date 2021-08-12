import React from "react";
import { graphql } from "react-relay";
import ItemList from "components/composed/item/ItemList";
import { QueryWrapper } from "components/api";
import { itemsQuery as Query } from "__generated__/itemsQuery.graphql";

export default function ItemListView() {
  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ order: "RECENT", page: 1 }}
    >
      {({ data }) => {
        if (!data) return null;
        return <ItemList<Query> data={data?.viewer?.items} />;
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query itemsQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
  }
`;
