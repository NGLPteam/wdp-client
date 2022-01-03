import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./EntityOrderingLayout.styles";
import { PageCount, Pagination } from "components/atomic";
import {
  EntityOrderingLayoutFragment$data,
  EntityOrderingLayoutFragment$key,
} from "@/relay/EntityOrderingLayoutFragment.graphql";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";

export default function EntityOrderingLayout({ data }: Props) {
  const ordering = useMaybeFragment(fragment, data);

  const pageInfo = useMemo(() => ordering?.children.pageInfo, [ordering]);

  const { t } = useTranslation();

  return ordering ? (
    <section className="a-bg-neutral00">
      <div className="l-container-wide">
        <Styled.Header>
          {ordering.name && <h3 className="t-capitalize">{ordering.name}</h3>}
          <PageCount
            data={pageInfo}
            length={ordering.children?.edges?.length}
            className="t-label-lg"
          />
        </Styled.Header>
        {ordering.children.edges.length > 0 ? (
          <ul className="t-unstyled-list">
            {ordering.children.edges.map(({ node: { entry } }: Node) => (
              <Styled.Item key={entry.slug}>
                <EntitySummaryFactory data={entry} />
              </Styled.Item>
            ))}
          </ul>
        ) : (
          <div>{t("common.no_results")}</div>
        )}
        <Styled.Footer>
          <Pagination data={pageInfo} />
        </Styled.Footer>
      </div>
    </section>
  ) : null;
}

interface Props {
  data?: EntityOrderingLayoutFragment$key | null;
}

type Node = EntityOrderingLayoutFragment$data["children"]["edges"][number];

const fragment = graphql`
  fragment EntityOrderingLayoutFragment on Ordering {
    name
    inheritedFromSchema
    children(page: $page) {
      edges {
        node {
          entry {
            __typename
            ... on Sluggable {
              slug
            }
            ...EntitySummaryFactoryFragment
          }
        }
      }
      pageInfo {
        ...PageCountFragment
        ...PaginationFragment
      }
    }
  }
`;
