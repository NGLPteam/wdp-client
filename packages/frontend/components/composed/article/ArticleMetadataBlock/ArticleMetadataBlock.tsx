import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleMetadataBlock.styles";
import ArticleIssueMetadata from "./ArticleIssueMetadata";
import { ArticleMetadataBlockFragment$key } from "@/relay/ArticleMetadataBlockFragment.graphql";
import MetadataFactory from "components/factories/MetadataFactory";

export default function ArticleMetadataBlock({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return entity ? (
    <Styled.Section className="l-container-wide">
      <h3>{t("layouts.metadata_header")}</h3>
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
            <MetadataFactory
              label={t("layouts.volume_id_label")}
              data={entity.volumeIdMeta}
            />
          </Styled.ListItem>
        )}
        {entity.onlineVersion && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("layouts.online_version_label")}
              data={entity.onlineVersion}
            />
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
    onlineVersion: schemaProperty(fullPath: "online_version") {
      ...MetadataFactoryFragment
    }
    ...ArticleIssueMetadataFragment
  }
`;
