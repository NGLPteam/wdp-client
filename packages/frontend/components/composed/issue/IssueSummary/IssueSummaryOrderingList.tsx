import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IssueSummaryItem from "./IssueSummaryItem";
import * as Styled from "./IssueSummary.styles";
import {
  IssueSummaryOrderingListFragment$data,
  IssueSummaryOrderingListFragment$key,
} from "@/relay/IssueSummaryOrderingListFragment.graphql";

type Node = IssueSummaryOrderingListFragment$data["edges"][number];

export default function IssueSummaryOrderingList({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return content && content.edges.length > 0 ? (
    <Styled.List>
      {content.edges.map(({ node }: Node, i: number) =>
        node.entry ? (
          <Styled.ListItem key={i}>
            <IssueSummaryItem data={node.entry} />
          </Styled.ListItem>
        ) : null
      )}
    </Styled.List>
  ) : null;
}

interface Props {
  data?: IssueSummaryOrderingListFragment$key | null;
}

const fragment = graphql`
  fragment IssueSummaryOrderingListFragment on OrderingEntryConnection {
    edges {
      node {
        entry {
          ... on Item {
            ...IssueSummaryItemFragment
          }
          ... on Collection {
            ...IssueSummaryItemFragment
          }
        }
      }
    }
  }
`;
