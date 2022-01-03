import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./IssueOrderingLayout.styles";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";
import {
  IssueOrderingLayoutFragment$data,
  IssueOrderingLayoutFragment$key,
} from "@/relay/IssueOrderingLayoutFragment.graphql";
import { Pagination } from "components/atomic";

export default function IssueOrderingLayout({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return content && content.children.edges.length > 0 ? (
    <>
      <header className="a-hidden">
        <h3>{content.header || content.name}</h3>
      </header>
      <Styled.List>
        {content.children.edges.map(({ node }: Node, i: number) =>
          node.entry ? (
            <Styled.ListItem key={i}>
              <EntitySummaryFactory data={node.entry} />
            </Styled.ListItem>
          ) : null
        )}
      </Styled.List>
      <Styled.Footer>
        <Pagination data={content.children.pageInfo} />
      </Styled.Footer>
    </>
  ) : null;
}

interface Props {
  data?: IssueOrderingLayoutFragment$key | null;
}

type Node = IssueOrderingLayoutFragment$data["children"]["edges"][number];

const fragment = graphql`
  fragment IssueOrderingLayoutFragment on Ordering {
    name
    header
    children(page: $page) {
      edges {
        node {
          entry {
            ... on Item {
              ...EntitySummaryFactoryFragment
            }
            ... on Collection {
              ...EntitySummaryFactoryFragment
            }
          }
        }
      }
      pageInfo {
        ...PaginationFragment
      }
    }
  }
`;
