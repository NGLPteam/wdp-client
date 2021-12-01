import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayout from "components/composed/entity/EntityLayout";
import JournalLayout from "components/composed/journal/JournalLayout";
import IssueLayout from "components/composed/issue/IssueLayout";
import ArticleLayout from "components/composed/article/ArticleLayout";
import { EntityLayoutFactoryFragment$key } from "@/relay/EntityLayoutFactoryFragment.graphql";

export default function EntityLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal":
      return <JournalLayout data={entity} />;
      break;

    case "journal_issue":
      return <IssueLayout data={entity} />;
      break;

    case "journal_article":
      return <ArticleLayout data={entity} />;
      break;

    default:
      return <EntityLayout data={entity} />;
      break;
  }
}

interface Props {
  data?: EntityLayoutFactoryFragment$key | null;
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
