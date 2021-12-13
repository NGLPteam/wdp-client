import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleMetadataBlock.styles";
import ArticleIssueMetadata from "./ArticleIssueMetadata";
import { ArticleMetadataBlockFragment$key } from "@/relay/ArticleMetadataBlockFragment.graphql";
import MetadataFactory from "components/factories/MetadataFactory";

export default function ArticleMetadataBlock({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <Styled.Section className="l-container-wide">
      <h3>Metadata</h3>
      <Styled.List>
        {entity.collectedMeta && (
          <Styled.ListItem>
            <MetadataFactory data={entity.collectedMeta} />
          </Styled.ListItem>
        )}
        {entity.publishedMeta && (
          <Styled.ListItem>
            <MetadataFactory data={entity.publishedMeta} />
          </Styled.ListItem>
        )}
        {entity.pageCountMeta && (
          <Styled.ListItem>
            <MetadataFactory data={entity.pageCountMeta} />
          </Styled.ListItem>
        )}
        {entity.volumeIdMeta && (
          <Styled.ListItem>
            <MetadataFactory label="Volume ID" data={entity.volumeIdMeta} />
          </Styled.ListItem>
        )}
        {entity && (
          <Styled.ListItem>
            <ArticleIssueMetadata data={entity} />
          </Styled.ListItem>
        )}
      </Styled.List>
    </Styled.Section>
  ) : null;
}

interface Props {
  data?: ArticleMetadataBlockFragment$key | null;
}

const fragment = graphql`
  fragment ArticleMetadataBlockFragment on Item {
    collectedMeta: schemaProperty(fullPath: "meta.collected") {
      ...MetadataFactoryFragment
    }
    publishedMeta: schemaProperty(fullPath: "meta.published") {
      ...MetadataFactoryFragment
    }
    pageCountMeta: schemaProperty(fullPath: "meta.page_count") {
      ...MetadataFactoryFragment
    }
    volumeIdMeta: schemaProperty(fullPath: "volume.id") {
      ...MetadataFactoryFragment
    }
    ...ArticleIssueMetadataFragment
  }
`;
