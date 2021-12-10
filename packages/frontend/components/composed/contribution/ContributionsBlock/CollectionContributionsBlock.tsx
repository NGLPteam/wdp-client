import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributionBlockItem from "./ContributionBlockItem";
import BaseContributionsBlock from "./BaseContributionsBlock";
import {
  CollectionContributionsBlockFragment$key,
  CollectionContributionsBlockFragment$data,
} from "@/relay/CollectionContributionsBlockFragment.graphql";

const CollectionContributionsBlock = ({
  data,
  background = "custom10",
}: Props) => {
  const contributors = useMaybeFragment(fragment, data);

  const showAvatars = useMemo(() => {
    return contributors?.edges.some(
      ({ node }) => node.contributor.image?.storage
    );
  }, [contributors]);

  return contributors && contributors.edges.length > 0 ? (
    <BaseContributionsBlock background={background}>
      {contributors.edges.map(({ node }: Node) => (
        <ContributionBlockItem
          data={node}
          key={node.slug}
          showAvatar={showAvatars}
        />
      ))}
    </BaseContributionsBlock>
  ) : null;
};

interface Props {
  data?: CollectionContributionsBlockFragment$key | null;
  background?: string;
}

export default CollectionContributionsBlock;

type Node = CollectionContributionsBlockFragment$data["edges"][number];

const fragment = graphql`
  fragment CollectionContributionsBlockFragment on CollectionContributionConnection {
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
