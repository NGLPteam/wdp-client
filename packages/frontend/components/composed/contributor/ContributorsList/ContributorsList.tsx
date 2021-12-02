import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorName from "../ContributorName";
import {
  ContributorsListFragment$data,
  ContributorsListFragment$key,
} from "@/relay/ContributorsListFragment.graphql";

type Node = ContributorsListFragment$data["edges"][number];

export default function ContributorsList({ data, className }: Props) {
  const contributions = useMaybeFragment(fragment, data);

  return contributions && contributions.edges.length > 0 ? (
    <p className={className}>
      {contributions.edges.map(({ node }: Node, i: number) => (
        <React.Fragment key={i}>
          <ContributorName data={node.contributor} />
          {i < contributions.edges.length - 1 && ", "}
        </React.Fragment>
      ))}
    </p>
  ) : null;
}

interface Props {
  data?: ContributorsListFragment$key | null;
  label?: string;
  className?: string;
}

const fragment = graphql`
  fragment ContributorsListFragment on ItemContributionConnection {
    edges {
      node {
        contributor {
          ...ContributorNameFragment
        }
      }
    }
  }
`;
