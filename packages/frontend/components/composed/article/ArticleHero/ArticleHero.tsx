import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./ArticleHero.styles";
import {
  PrecisionDate,
  PeerReviewed,
  CCLicense,
  PreprintVersion,
  OpenAccess,
  DOI,
  FullText,
  Markdown,
  Alert,
} from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";
import { ArticleHeroFragment$key } from "@/relay/ArticleHeroFragment.graphql";
import { PrimaryHero } from "components/layout/hero";

export default function ArticleHero({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const visibilityMessage =
    article?.visibility === "HIDDEN" || article?.currentlyHidden
      ? t("messages.hidden", { schema: t("schema.nglp.article") })
      : null;

  return article ? (
    <PrimaryHero
      Alert={
        visibilityMessage && (
          <Alert message={visibilityMessage} badge color="blue" />
        )
      }
      title={<Markdown.Title>{article.title}</Markdown.Title>}
      subtitle={
        article.subtitle && (
          <h2 className="t-copy-italic">
            <Markdown.Title>{article.subtitle}</Markdown.Title>
          </h2>
        )
      }
      LeftComponent={
        <>
          <Styled.DataBlock>
            <ContributorsList
              className="t-copy-medium"
              data={article.contributions}
              itemSlug={article.slug}
              filterRole="author"
            />
            {article.published?.value && (
              <span className="t-copy-lighter">
                <PrecisionDate data={article.published} />
              </span>
            )}
          </Styled.DataBlock>
          {article.abstract && <FullText data={article.abstract} />}
          {article.pdfVersion?.asset && (
            <AssetDownloadButton data={article.pdfVersion.asset} />
          )}
        </>
      }
      RightComponent={
        <>
          {article.journal && <PreprintVersion data={article.journal} />}
          <DOI data={article} />
          {article.journal ? (
            <>
              <CCLicense data={article.journal} />
              <OpenAccess data={article.journal} />
              <PeerReviewed data={article.journal} />
            </>
          ) : (
            <>
              <CCLicense data={article} />
              <OpenAccess data={article} />
              <PeerReviewed data={article} />
            </>
          )}
        </>
      }
    />
  ) : null;
}

interface Props {
  data?: ArticleHeroFragment$key | null;
}

const fragment = graphql`
  fragment ArticleHeroFragment on Item {
    slug
    title
    subtitle
    summary
    visibility
    currentlyHidden
    ...DOIFragment
    published {
      ...PrecisionDateFragment
      value
    }
    contributions {
      ...ContributorsListFragment
    }
    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ... on AssetProperty {
        asset {
          ...AssetDownloadButtonFragment
        }
      }
    }
    journal: ancestorOfType(schema: "nglp:journal") {
      ...PeerReviewedFragment
      ...PreprintVersionFragment
      ...OpenAccessFragment
      ...CCLicenseFragment
    }
    abstract: schemaProperty(fullPath: "abstract") {
      ...FullTextFragment
    }
    ...CCLicenseFragment
    ...PeerReviewedFragment
    ...OpenAccessFragment
  }
`;
