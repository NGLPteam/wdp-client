import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { EntityContributorsLayoutFragment$key } from "@/relay/EntityContributorsLayoutFragment.graphql";

export default function EntityContributorsLayout({ data }: Props) {
  const contributors = useMaybeFragment(fragment, data);

  return contributors ? (
    <div>
      <h3>Contributors</h3>
    </div>
  ) : null;
}

interface Props {
  data?: EntityContributorsLayoutFragment$key | null;
}

const fragment = graphql`
  fragment EntityContributorsLayoutFragment on ItemContributionConnection {
    edges {
      node {
        id
      }
    }
  }
`;
