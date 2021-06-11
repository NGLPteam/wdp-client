import React from "react";
import { graphql } from "react-relay";
import { useFragment } from "relay-hooks";
import styled from "styled-components";

import { ItemCardListFragment$key } from "__generated__/ItemCardListFragment.graphql";

import { CardList } from "components/scaffolding/Cards";

import ItemCard from "./ItemCard";

export default function ItemCardList(props: Props) {
  const items = useFragment(fragment, props.items);

  return (
    <div>
      <h3>{items.edges.length} Item(s)</h3>
      <CardList>
        {items.edges.map(({ node }, index) => (
          <ItemCard item={node} key={index} />
        ))}
      </CardList>
    </div>
  );
}

interface Props {
  items: ItemCardListFragment$key;
}

const fragment = graphql`
  fragment ItemCardListFragment on ItemConnection {
    edges {
      node {
        ...ItemCardFragment
      }
    }
  }
`;
