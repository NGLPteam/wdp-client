import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import {
  EntityOrderingLayoutFragment$data,
  EntityOrderingLayoutFragment$key,
} from "@/relay/EntityOrderingLayoutFragment.graphql";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";
import BrowseListLayout from "components/layout/BrowseListLayout";
import BrowseTreeLayout from "components/layout/BrowseTreeLayout";
import { NoContent } from "components/layout";

export default function EntityOrderingLayout({ data }: Props) {
  const ordering = useMaybeFragment(fragment, data);

  const pageInfo = useMemo(() => ordering?.children.pageInfo, [ordering]);

  const mode = ordering?.render?.mode;

  return ordering ? (
    mode === "TREE" ? (
      <BrowseTreeLayout
        data={ordering.children}
        header={ordering.header || ordering.name}
      />
    ) : (
      <BrowseListLayout
        data={pageInfo}
        header={ordering.header || ordering.name}
        items={ordering.children.edges.map(({ node: { entry } }: Node) => (
          <EntitySummaryFactory key={entry.slug} data={entry} />
        ))}
      />
    )
  ) : (
    <div className="l-container-wide l-container-wide--p-lg">
      <NoContent />
    </div>
  );
}

interface Props {
  data?: EntityOrderingLayoutFragment$key | null;
}

type Node = EntityOrderingLayoutFragment$data["children"]["edges"][number];

const fragment = graphql`
  fragment EntityOrderingLayoutFragment on Ordering
  @argumentDefinitions(
    page: { type: "Int", defaultValue: 1 }
    perPage: { type: "Int", defaultValue: 20 }
  ) {
    name
    header
    render {
      mode
    }
    children(page: $page, perPage: $perPage) {
      edges {
        node {
          id
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
      ...BrowseTreeLayoutFragment
    }
  }
`;
