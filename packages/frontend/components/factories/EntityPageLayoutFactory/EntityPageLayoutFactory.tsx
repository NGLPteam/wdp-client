import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayoutFactory from "../EntityLayoutFactory";
import IssueLayout from "components/composed/issue/IssueLayout";
import { EntityPageLayoutFactoryFragment$key } from "@/relay/EntityPageLayoutFactoryFragment.graphql";
import EntityPageLayout from "components/composed/entity/EntityPageLayout";
import IssuePageLayout from "components/composed/issue/IssuePageLayout";
import IssueSidebarNav from "components/composed/issue/IssueSidebarNav";

export default function EntityPageLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal_issue":
      return (
        <IssueLayout data={entity}>
          <IssueSidebarNav data={entity}>
            <IssuePageLayout data={entity.page} />
          </IssueSidebarNav>
        </IssueLayout>
      );

    default:
      return (
        <EntityLayoutFactory data={entity}>
          <EntityPageLayout data={entity.page} />
        </EntityLayoutFactory>
      );
  }
}

interface Props {
  data?: EntityPageLayoutFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityPageLayoutFactoryFragment on AnyEntity {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...IssueLayoutFragment
      ...IssueSidebarNavFragment
      ...EntityLayoutFactoryFragment

      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
        ...IssuePageLayoutFragment
      }
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFactoryFragment

      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
      }
    }
  }
`;
