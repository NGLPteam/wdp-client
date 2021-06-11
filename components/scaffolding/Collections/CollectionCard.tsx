import React from "react";
import { graphql } from "react-relay";
import { useFragment } from "relay-hooks";
import Link from "next/link";

import { CollectionCardFragment$key } from "__generated__/CollectionCardFragment.graphql";

import { Card } from "components/scaffolding/Cards";

export default function CollectionCard(props: Props) {
  const collection = useFragment(fragment, props.collection);

  return (
    <Card>
      <h2>
        <Link href={`/collections/${collection.slug}`}>{collection.title}</Link>
      </h2>
      <p>{collection.description}</p>
    </Card>
  );
}

interface Props {
  collection: CollectionCardFragment$key;
}

const fragment = graphql`
  fragment CollectionCardFragment on Collection {
    slug
    title
    description
  }
`;
