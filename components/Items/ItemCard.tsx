import React from "react";
import { graphql } from "react-relay";
import { useFragment } from "relay-hooks";

import { ItemCardFragment$key } from "__generated__/ItemCardFragment.graphql";

import { Card } from "components/Cards";

export default function ItemCard(props: Props) {
  const item = useFragment(fragment, props.item);

  return (
    <Card>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </Card>
  );
}

interface Props {
  item: ItemCardFragment$key;
}

const fragment = graphql`
fragment ItemCardFragment on Item {
  slug
  title
  description
}
`;