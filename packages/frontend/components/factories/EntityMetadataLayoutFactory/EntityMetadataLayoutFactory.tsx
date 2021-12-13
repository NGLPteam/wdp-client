import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayout from "components/composed/entity/EntityLayout";
import ArticleLayout from "components/composed/article/ArticleLayout";
import { EntityMetadataLayoutFactoryFragment$key } from "@/relay/EntityMetadataLayoutFactoryFragment.graphql";
import ArticleMetadataBlock from "components/composed/article/ArticleMetadataBlock/ArticleMetadataBlock";

export default function EntityMetadataLayoutFactory({ data, children }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "article":
    case "journal_article":
      return (
        <ArticleLayout data={entity}>
          <ArticleMetadataBlock data={entity} />
        </ArticleLayout>
      );
      break;

    default:
      return <EntityLayout data={entity}>{children}</EntityLayout>;
      break;
  }
}

interface Props {
  data?: EntityMetadataLayoutFactoryFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityMetadataLayoutFactoryFragment on AnyEntity {
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

      ...ArticleLayoutFragment
      ...ArticleMetadataBlockFragment
      ...EntityLayoutFragment
    }
  }
`;
