"use client";

import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";
import { Pagination } from "components/atomic";
import { NoContent } from "components/layout";
import {
  IssueOrderingLayoutFragment$data,
  IssueOrderingLayoutFragment$key,
} from "@/relay/IssueOrderingLayoutFragment.graphql";
import * as Styled from "./IssueOrderingLayout.styles";

export default function IssueOrderingLayout({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return content ? (
    <>
      <header className="a-hidden">
        <h3>{content.header || content.name}</h3>
      </header>
      {content.children?.edges && content.children.edges.length > 0 ? (
        <Styled.List>
          {content.children.edges.map(({ node }: Node) =>
            node.entry ? (
              <Styled.ListItem key={node.entry.slug}>
                <EntitySummaryFactory data={node.entry} />
              </Styled.ListItem>
            ) : null,
          )}
        </Styled.List>
      ) : (
        <NoContent />
      )}
      {content.children?.pageInfo && (
        <Styled.Footer>
          <Pagination data={content.children.pageInfo} />
        </Styled.Footer>
      )}
    </>
  ) : (
    <div className="l-container-wide l-container-wide--p-lg">
      {t("common.no_content")}
    </div>
  );
}

interface Props {
  data?: IssueOrderingLayoutFragment$key | null;
}

type Node = IssueOrderingLayoutFragment$data["children"]["edges"][number];

const fragment = graphql`
  fragment IssueOrderingLayoutFragment on Ordering
  @argumentDefinitions(
    page: { type: "Int", defaultValue: 1 }
    perPage: { type: "Int", defaultValue: 40 }
  ) {
    name
    header
    children(page: $page, perPage: $perPage) {
      edges {
        node {
          entry {
            ... on Sluggable {
              slug
            }
            ...EntitySummaryFactoryFragment
          }
        }
      }
      pageInfo {
        ...PaginationFragment
      }
    }
  }
`;
