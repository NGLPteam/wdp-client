import React from "react";
import { graphql } from "react-relay";

import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { CollectionDetailQuery } from "__generated__/CollectionDetailQuery.graphql";

import ItemCardList from "components/scaffolding/Items/ItemCardList";

export default function CollectionDetail(props: Props) {
  const { data, isLoading } = useAuthenticatedQuery<CollectionDetailQuery>(
    query,
    { slug: props.slug }
  );

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <h2>{data.collection.title}</h2>
      <p>{data.collection.description}</p>
      <ItemCardList items={data.collection.items} />
    </div>
  );
}

interface Props {
  slug: string;
}

const query = graphql`
  query CollectionDetailQuery($slug: Slug!) {
    collection(slug: $slug) {
      title
      description

      items {
        ...ItemCardListFragment
      }
    }
  }
`;
