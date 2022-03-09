import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import {
  EntityOrderingLayoutFragment$data,
  EntityOrderingLayoutFragment$key,
} from "@/relay/EntityOrderingLayoutFragment.graphql";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";
import BrowseListLayout from "components/layout/BrowseListLayout";

export default function EntityOrderingLayout({ data }: Props) {
  const ordering = useMaybeFragment(fragment, data);

  const pageInfo = useMemo(() => ordering?.children.pageInfo, [ordering]);

  return ordering ? (
    <BrowseListLayout
      data={pageInfo}
      header={ordering.header || ordering.name}
      items={ordering.children.edges.map(({ node: { entry } }: Node) => (
        <EntitySummaryFactory key={entry.slug} data={entry} />
      ))}
    />
  ) : null;
}

interface Props {
  data?: EntityOrderingLayoutFragment$key | null;
}

type Node = EntityOrderingLayoutFragment$data["children"]["edges"][number];

const fragment = graphql`
  fragment EntityOrderingLayoutFragment on Ordering
  @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
    name
    header
    render {
      mode
    }
    children(page: $page) {
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
        ...BrowseListLayoutFragment
      }
    }
  }
`;
