import React from "react";
import { graphql } from "react-relay";
import CollectionList from "components/composed/collection/CollectionList";
import { QueryWrapper } from "components/api";
import { collectionsQuery as Query } from "__generated__/collectionsQuery.graphql";
import { useBaseListQueryVars } from "hooks";
import { CollectionListFragment$key } from "@/relay/CollectionListFragment.graphql";

export default function CollectionListView() {
  const queryVars = useBaseListQueryVars();

  return (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => {
        return (
          <CollectionList<Query>
            data={data?.viewer?.collections as CollectionListFragment$key}
          />
        );
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query collectionsQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      collections(access: READ_ONLY, order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;
