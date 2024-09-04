"use client";

import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityMetadataBlock from "components/composed/entity/EntityMetadataBlock/";
import { MetadataProperty } from "components/layout";
import MetadataFactory from "components/factories/MetadataFactory";
import { ExternalLink, PrecisionDate } from "components/atomic";
import ContributorName from "components/composed/contributor/ContributorName";

import { normalizeDoiUrl } from "helpers";
import { Fragment } from "react";
import { ArticleMetadataFragment$key } from "@/relay/ArticleMetadataFragment.graphql";
import ArticleIssueMetadata from "./parts/ArticleIssueMetadata";

interface Props {
  data?: ArticleMetadataFragment$key | null;
}

export default function ArticleMetadata({ data }: Props) {
  const { t } = useTranslation();
  const article = useMaybeFragment(fragment, data);

  const authors = article?.contributions?.edges?.filter(
    ({ node }) => node.role?.toLowerCase() === "author",
  );

  const doi = article?.doi ? normalizeDoiUrl(article.doi) : null;

  return article ? (
    <EntityMetadataBlock>
      <MetadataProperty
        label={t("metadata.author", { count: authors?.length ?? 1 })}
      >
        {!!authors?.length &&
          authors.map(({ node }, i) => (
            <Fragment key={i}>
              <ContributorName data={node.contributor} />
              {i < authors.length - 1 && ", "}
            </Fragment>
          ))}
      </MetadataProperty>
      <MetadataProperty label={t("metadata.journal")}>
        {article.journal?.title}
      </MetadataProperty>
      <MetadataFactory
        label={t("metadata.volume")}
        data={article.volumeIdMeta}
        showPlaceholder
      />
      <ArticleIssueMetadata data={article} />
      <MetadataFactory data={article.collectedMeta} />
      <MetadataProperty label={t("date.published")}>
        {article.published && <PrecisionDate data={article.published} />}
      </MetadataProperty>
      <MetadataFactory data={article.pageCountMeta} />
      <MetadataProperty label={"DOI"}>
        {doi && <ExternalLink href={doi.url}>{doi.displayUrl}</ExternalLink>}
      </MetadataProperty>
      <MetadataFactory
        label={t("metadata.license")}
        data={article.journal?.ccLicense}
        showPlaceholder
      />
      <MetadataFactory
        label={t("metadata.pdf_version")}
        data={article.pdfVersion}
      />
      <MetadataFactory
        label={t("metadata.preprint_version")}
        data={article.prePrintVersion}
      />
      <MetadataFactory
        label={t("metadata.online_version")}
        data={article.onlineVersion}
      />
    </EntityMetadataBlock>
  ) : null;
}

const fragment = graphql`
  fragment ArticleMetadataFragment on Item {
    doi

    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Entity {
        title
      }
      ... on Collection {
        ccLicense: schemaProperty(fullPath: "cc_license") {
          ...MetadataFactoryFragment
        }
      }
    }

    contributions {
      edges {
        node {
          role
          contributor {
            ...ContributorNameFragment
          }
        }
      }
    }

    collectedMeta: schemaProperty(fullPath: "meta.collected") {
      ...MetadataFactoryFragment
    }
    published {
      value
      ...PrecisionDateFragment
    }
    pageCountMeta: schemaProperty(fullPath: "meta.page_count") {
      ...MetadataFactoryFragment
    }
    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ...MetadataFactoryFragment
    }
    onlineVersion: schemaProperty(fullPath: "online_version") {
      ...MetadataFactoryFragment
    }
    prePrintVersion: schemaProperty(fullPath: "preprint_version") {
      ...MetadataFactoryFragment
    }

    volumeIdMeta: schemaProperty(fullPath: "volume.id") {
      ...MetadataFactoryFragment
    }

    ...ArticleIssueMetadataFragment
  }
`;
