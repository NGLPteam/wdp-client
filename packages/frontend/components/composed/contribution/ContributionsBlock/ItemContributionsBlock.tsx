import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributionBlockItem from "./ContributionBlockItem";
import BaseContributionsBlock from "./BaseContributionsBlock";
import {
  ItemContributionsBlockFragment$key,
  ItemContributionsBlockFragment$data,
} from "@/relay/ItemContributionsBlockFragment.graphql";

const ItemContributionsBlock = ({ data, background }: Props) => {
  const contributors = useMaybeFragment(fragment, data);

  return contributors && contributors.edges.length > 0 ? (
    <BaseContributionsBlock background={background}>
      {contributors.edges.map(({ node }: Node) => (
        <ContributionBlockItem data={node} key={node.slug} />
      ))}
    </BaseContributionsBlock>
  ) : null;
};

interface Props {
  data?: ItemContributionsBlockFragment$key | null;
  background?: string;
}

export default ItemContributionsBlock;

type Node = ItemContributionsBlockFragment$data["edges"][number];

const fragment = graphql`
  fragment ItemContributionsBlockFragment on ItemContributionConnection {
    edges {
      node {
        slug
        ...ContributionBlockItemFragment
      }
    }
  }
`;
