import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EntityMetadataFactoryFragment$key } from "@/relay/EntityMetadataFactoryFragment.graphql";
import ArticleMetadataBlock from "components/composed/article/ArticleMetadataBlock/ArticleMetadataBlock";

export default function EntityMetadataFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return <ArticleMetadataBlock data={entity} />;
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
