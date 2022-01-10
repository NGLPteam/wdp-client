import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EntityOrderingLayoutFactoryFragment$key } from "@/relay/EntityOrderingLayoutFactoryFragment.graphql";
import EntityOrderingLayout from "components/composed/entity/EntityOrderingLayout";
import IssueOrderingLayout from "components/composed/issue/IssueOrderingLayout";
import IssueSidebarNav from "components/composed/issue/IssueSidebarNav";

export default function EntityOrderingLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal_issue":
      return (
        <IssueSidebarNav data={entity}>
          <IssueOrderingLayout data={entity.ordering} />
        </IssueSidebarNav>
      );

    default:
      return <EntityOrderingLayout data={entity.ordering} />;
  }
}

interface Props {
  data?: EntityOrderingLayoutFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityOrderingLayoutFactoryFragment on Entity
  @argumentDefinitions(
    page: { type: "Int", defaultValue: 1 }
    identifier: { type: "String!", defaultValue: "items" }
  ) {
    schemaDefinition {
      identifier
    }

    ...IssueSidebarNavFragment

    ordering(identifier: $identifier) {
      ...EntityOrderingLayoutFragment @arguments(page: $page)
      ...IssueOrderingLayoutFragment @arguments(page: $page)
    }
  }
`;
