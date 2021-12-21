import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorName from "../ContributorName";
import {
  ContributorsListFragment$data,
  ContributorsListFragment$key,
} from "@/relay/ContributorsListFragment.graphql";
import { NamedLink } from "components/atomic";

type Node = ContributorsListFragment$data["edges"][number];

export default function ContributorsList({
  data,
  className,
  itemSlug,
  collectionSlug,
}: Props) {
  const contributions = useMaybeFragment(fragment, data);

  return contributions && contributions.edges.length > 0 ? (
    <span className={className}>
      {contributions.edges.map(({ node }: Node, i: number) => (
        <React.Fragment key={i}>
          {node.contributor.slug ? (
            <NamedLink
              route="contributor"
              routeParams={{
                slug: node.contributor.slug,
                ...(itemSlug && { item: itemSlug }),
                ...(collectionSlug && { collection: collectionSlug }),
              }}
              passHref
            >
              <a>
                <ContributorName data={node.contributor} />
                {i < contributions.edges.length - 1 && ", "}
              </a>
            </NamedLink>
          ) : (
            <>
              <ContributorName data={node.contributor} />
              {i < contributions.edges.length - 1 && ", "}
            </>
          )}
        </React.Fragment>
      ))}
    </span>
  ) : null;
}

interface Props {
  data?: ContributorsListFragment$key | null;
  label?: string;
  className?: string;
  /* Pass this in to add the parent item's slug to the contributor route */
  itemSlug?: string;
  /* Pass this in to add the parent collection's slug to the contributor route */
  collectionSlug?: string;
}

const fragment = graphql`
  fragment ContributorsListFragment on ItemContributionConnection {
    edges {
      node {
        contributor {
          ... on Sluggable {
            slug
          }
          ...ContributorNameFragment
        }
      }
    }
  }
`;
