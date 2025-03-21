"use client";

import { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import BrowseListLayout from "components/layout/BrowseListLayout";
import BrowseTreeLayout from "components/layout/BrowseTreeLayout";
import { NoContent } from "components/layout";
import EntitySummary from "@/components/composed/entity/EntitySummary";
import {
  EntityOrderingLayoutFragment$data,
  EntityOrderingLayoutFragment$key,
} from "@/relay/EntityOrderingLayoutFragment.graphql";
import type { ListEntityContext } from "@/types/graphql-schema";

export default function EntityOrderingLayout({ data, showContext }: Props) {
  const ordering = useFragment(fragment, data);

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
        entityData={ordering.entity}
        header={ordering.header || ordering.name}
        items={ordering.children.edges.map(({ node: { entry } }: Node) => (
          <EntitySummary
            key={entry.slug}
            data={entry}
            showContext={showContext}
            browseStyle
          />
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
  showContext?: ListEntityContext;
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
    entity {
      __typename
      ... on Sluggable {
        slug
      }
      ...BackButtonFragment
    }
    children(page: $page, perPage: $perPage) {
      edges {
        node {
          id
          entry {
            ... on Sluggable {
              slug
            }
            ...EntitySummaryFragment
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
