import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayout from "components/composed/entity/EntityLayout";
import { EntityPageLayoutFactoryFragment$key } from "@/relay/EntityPageLayoutFactoryFragment.graphql";
import ArticlePageLayout from "components/composed/article/ArticlePageLayout";

export default function EntityPageLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "article":
    case "journal_article":
      return <ArticlePageLayout data={entity} />;
      break;

    default:
      return <EntityLayout data={entity} />;
      break;
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

      ...EntityLayoutFragment
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...ArticlePageLayoutFragment
    }
  }
`;
