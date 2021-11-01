import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { itemsQuery as Query } from "__generated__/itemsQuery.graphql";
import { useBaseListQueryVars } from "hooks";

import ItemList from "components/composed/item/ItemList";

export default function ItemListView() {
  const queryVars = useBaseListQueryVars();

  return (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => {
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
