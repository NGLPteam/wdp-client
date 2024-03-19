import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { LoadingBlock } from "components/atomic";
import EntityMetadataBlock from "components/composed/entity/EntityMetadataBlock";
import { EntityMetadataFactoryFragment$key } from "@/relay/EntityMetadataFactoryFragment.graphql";
import {
  ArticleMetadata,
  DissertationMetadata,
  PaperMetadata,
} from "./patterns";

export default function EntityMetadataFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);
  const { loading } = usePageContext();

  // We aren't currently using this factory for collection metadata, and I don't think there's a need for it in design. But, since I left Collection in the fragment for now, this is here as a catch. -LD
  if (entity?.schemaDefinition?.kind === "COLLECTION") return null;

  if (loading)
    return (
      <EntityMetadataBlock>
        <LoadingBlock />
      </EntityMetadataBlock>
    );

  switch (entity?.schemaDefinition?.identifier) {
    case "journal_article":
      return <ArticleMetadata data={entity} />;
    case "dissertation":
      return <DissertationMetadata data={entity} />;
    case "paper":
    default:
      return <PaperMetadata data={entity} />;
  }
}

interface Props {
  data?: EntityMetadataFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityMetadataFactoryFragment on AnyEntity {
    ... on Collection {
      schemaDefinition {
        kind
        identifier
      }
    }
    ... on Item {
      schemaDefinition {
        kind
        identifier
      }

      ...ArticleMetadataFragment
      ...DissertationMetadataFragment
      ...PaperMetadataFragment
    }
  }
`;
