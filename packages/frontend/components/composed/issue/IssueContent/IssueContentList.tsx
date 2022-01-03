import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./IssueContent.styles";
import ArticleSummary from "components/composed/article/ArticleSummary";
import {
  IssueContentListFragment$data,
  IssueContentListFragment$key,
} from "@/relay/IssueContentListFragment.graphql";

type Node = IssueContentListFragment$data["edges"][number];

export default function IssueContentList({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return content && content.edges.length > 0 ? (
    <Styled.List>
      {content.edges.map(({ node }: Node) =>
        node.slug ? (
          <Styled.ListItem key={node.slug}>
            <ArticleSummary data={node} />
          </Styled.ListItem>
        ) : null
      )}
    </Styled.List>
  ) : null;
}

interface Props {
  data?: IssueContentListFragment$key | null;
}

const fragment = graphql`
  fragment IssueContentListFragment on ItemConnection {
    edges {
      node {
        slug
        ...ArticleSummaryFragment
      }
    }
  }
`;
