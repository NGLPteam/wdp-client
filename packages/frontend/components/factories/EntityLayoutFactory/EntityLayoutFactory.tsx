import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayout from "components/composed/entity/EntityLayout";
import JournalLayout from "components/composed/journal/JournalLayout";
import IssueLayout from "components/composed/issue/IssueLayout";
import { EntityLayoutFactoryFragment$key } from "@/relay/EntityLayoutFactoryFragment.graphql";
import ArticleLayout from "components/composed/article/ArticleLayout";
import VolumeLayout from "components/composed/volume/VolumeLayout";

export default function EntityLayoutFactory({ data, children }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal":
      return <JournalLayout data={entity}>{children}</JournalLayout>;

    case "journal_volume":
      return <VolumeLayout data={entity}>{children}</VolumeLayout>;

    case "journal_issue":
      return <IssueLayout data={entity}>{children}</IssueLayout>;

    case "article":
    case "journal_article":
    case "dissertation":
      return <ArticleLayout data={entity}>{children}</ArticleLayout>;

    default:
      return <EntityLayout data={entity}>{children}</EntityLayout>;
  }
}

interface Props {
  data?: EntityLayoutFactoryFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityLayoutFactoryFragment on AnyEntity {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...JournalLayoutFragment
      ...IssueLayoutFragment
      ...VolumeLayoutFragment
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...ArticleLayoutFragment
    }
  }
`;
