import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributionBlockItem from "./ContributionBlockItem";
import BaseContributionsBlock from "./BaseContributionsBlock";
import {
  ItemContributionsBlockFragment$key,
  ItemContributionsBlockFragment$data,
} from "@/relay/ItemContributionsBlockFragment.graphql";

const ItemContributionsBlock = ({ data, background }: Props) => {
  const contributions = useMaybeFragment(fragment, data);

  const showAvatars = useMemo(() => {
    return contributions?.edges.some(
      ({ node }: Node) => node.contributor?.image?.storage
    );
  }, [contributions]);

  return contributions && contributions.edges.length > 0 ? (
    <BaseContributionsBlock background={background}>
      {contributions.edges.map(({ node }: Node) => (
        <ContributionBlockItem
          showAvatar={showAvatars}
          data={node}
          key={node.slug}
        />
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
        contributor {
          ... on PersonContributor {
            image {
              storage
            }
          }
          ... on OrganizationContributor {
            image {
              storage
            }
          }
        }
        ...ContributionBlockItemFragment
      }
    }
  }
`;
