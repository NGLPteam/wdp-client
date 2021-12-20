import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayoutFactory from "../EntityLayoutFactory";
import IssueLayout from "components/composed/issue/IssueLayout";
import { EntityPageLayoutFactoryFragment$key } from "@/relay/EntityPageLayoutFactoryFragment.graphql";
import EntityPageLayout from "components/composed/entity/EntityPageLayout";
import IssuePageLayout from "components/composed/issue/IssuePageLayout";
import IssueContentNav from "components/composed/issue/IssueContentNav";

export default function EntityPageLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal_issue":
      return (
        <IssueLayout data={entity}>
          <IssueContentNav data={entity}>
            <IssuePageLayout data={entity.page} />
          </IssueContentNav>
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
      ...IssueContentNavFragment
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
