import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EntityMetadataFactoryFragment$key } from "@/relay/EntityMetadataFactoryFragment.graphql";
import ArticleMetadataBlock from "components/composed/article/ArticleMetadataBlock/ArticleMetadataBlock";

export default function EntityMetadataFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "article":
    case "journal_article":
    case "dissertation":
      return <ArticleMetadataBlock data={entity} />;

    default:
      return <>nothin.</>;
  }
}

interface Props {
  data?: EntityMetadataFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityMetadataFactoryFragment on AnyEntity {
    ... on Collection {
      schemaDefinition {
        identifier
      }
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...ArticleMetadataBlockFragment
    }
  }
`;
