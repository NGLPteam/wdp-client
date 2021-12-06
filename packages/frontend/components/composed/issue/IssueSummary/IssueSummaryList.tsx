import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IssueSummaryItem from "./IssueSummaryItem";
import * as Styled from "./IssueSummary.styles";
import {
  IssueSummaryListFragment$data,
  IssueSummaryListFragment$key,
} from "@/relay/IssueSummaryListFragment.graphql";

type Node = IssueSummaryListFragment$data["edges"][number];

export default function IssueSummaryList({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return content && content.edges.length > 0 ? (
    <Styled.List>
      {content.edges.map(({ node }: Node) =>
        node.slug ? (
          <Styled.ListItem key={node.slug}>
            <IssueSummaryItem data={node} />
          </Styled.ListItem>
        ) : null
      )}
    </Styled.List>
  ) : null;
}

interface Props {
  data?: IssueSummaryListFragment$key | null;
}

const fragment = graphql`
  fragment IssueSummaryListFragment on ItemConnection {
    edges {
      node {
        slug
        ...IssueSummaryItemFragment
      }
    }
  }
`;
