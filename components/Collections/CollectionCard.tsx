import React from "react";
import { graphql } from "react-relay";
import { useFragment } from "relay-hooks";

import { CollectionCardFragment$key } from "__generated__/CollectionCardFragment.graphql";

export default function CollectionCard(props: Props) {
  const collection = useFragment(fragment, props.collection);

  return (
    <div>
      <h2>{collection.title}</h2>
      <p>{collection.description}</p>
    </div>
  );
}

interface Props {
  collection: CollectionCardFragment$key;
}

const fragment = graphql`
fragment CollectionCardFragment on Collection {
  id
  title
  description
}
`;