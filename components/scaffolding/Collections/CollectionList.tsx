import React, { useState } from "react";
import { graphql } from "react-relay";

import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";

import {
  CollectionListQuery,
  CollectionListQueryVariables,
} from "__generated__/CollectionListQuery.graphql";
import { CardList } from "components/scaffolding/Cards";

import CollectionCard from "./CollectionCard";
import CollectionFilters from "./CollectionFilters";

export default function CollectionList() {
  const [variables, setVariables] = useState<CollectionListQueryVariables>({
    order: "RECENT",
  });

  const { data, isLoading } = useAuthenticatedQuery<CollectionListQuery>(
    query,
    variables
  );

  if (isLoading) {
    return null;
  }

  return (
    <div>
      {/* @ts-expect-error scaffolding */}
      <CollectionFilters variables={variables} setVariables={setVariables} />
      <CardList>
        {data.collections.edges.map(({ node: collection }, index) => (
          <CollectionCard key={index} collection={collection} />
        ))}
      </CardList>
    </div>
  );
}

const query = graphql`
  query CollectionListQuery($order: SimpleOrder!) {
    collections(order: $order) {
      edges {
        node {
          ...CollectionCardFragment
        }
      }
    }
  }
`;
