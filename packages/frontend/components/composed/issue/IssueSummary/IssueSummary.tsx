import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IssueSummaryQuery from "./IssueSummaryQuery";
import IssueSummaryItemsQuery from "./IssueSummaryItemsQuery";
import { IssueSummaryFragment$key } from "@/relay/IssueSummaryFragment.graphql";

export default function IssueSummary({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  // Get the first order in orderings as a default option
  const firstOrder = useMemo(
    () => content?.orderings?.edges[0]?.node.identifier,
    [content]
  );

  // If no orderings are defined on this issue, return a list of items
  return firstOrder ? (
    <IssueSummaryQuery order={firstOrder} />
  ) : (
    <IssueSummaryItemsQuery />
  );
}

interface Props {
  data?: IssueSummaryFragment$key | null;
}

const fragment = graphql`
  fragment IssueSummaryFragment on Collection {
    orderings {
      edges {
        node {
          name
          slug
          identifier
        }
      }
    }
  }
`;
