import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./IssueOrderingLayout.styles";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";
import {
  IssueOrderingLayoutFragment$data,
  IssueOrderingLayoutFragment$key,
} from "@/relay/IssueOrderingLayoutFragment.graphql";
import { Pagination } from "components/atomic";

export default function IssueOrderingLayout({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return content ? (
    <>
      <header className="a-hidden">
        <h3>{content.header || content.name}</h3>
      </header>
      {content.children.edges.length > 0 ? (
        <Styled.List>
          {content.children.edges.map(({ node }: Node, i: number) =>
            node.entry ? (
              <Styled.ListItem key={i}>
                <EntitySummaryFactory data={node.entry} />
              </Styled.ListItem>
            ) : null
          )}
        </Styled.List>
      ) : (
        t("common.no_results")
      )}
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
  fragment IssueOrderingLayoutFragment on Ordering
  @argumentDefinitions(page: { type: "Int" }) {
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
