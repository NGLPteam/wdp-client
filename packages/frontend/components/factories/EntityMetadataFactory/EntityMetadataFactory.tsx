import { graphql, readInlineData } from "relay-runtime";
import { EntityMetadataFactoryFragment$key } from "@/relay/EntityMetadataFactoryFragment.graphql";
import {
  ArticleMetadata,
  DissertationMetadata,
  PaperMetadata,
} from "./patterns";

export default function EntityMetadataFactory({ data }: Props) {
  if (!data) return null;

  const entity = readInlineData(fragment, data);

  if (entity?.schemaDefinition?.kind === "COLLECTION") return null;

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
  fragment EntityMetadataFactoryFragment on AnyEntity @inline {
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
