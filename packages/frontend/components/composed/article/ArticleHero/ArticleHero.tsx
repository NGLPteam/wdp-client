import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleHero.styles";
import {
  PrecisionDate,
  PeerReviewed,
  CCLicense,
  PreprintVersion,
  OpenAccess,
  DOI,
  FullText,
} from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";
import { ArticleHeroFragment$key } from "@/relay/ArticleHeroFragment.graphql";

export default function ArticleHero({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return article ? (
    <header className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <Styled.LeftSide>
          <Styled.TitleBlock>
            <h2>{article.title}</h2>
            {article.subtitle && (
              <h4 className="t-copy-italic">{article.subtitle}</h4>
            )}
          </Styled.TitleBlock>
          <Styled.DataBlock>
            <ContributorsList
              className="t-copy-medium"
              data={article.contributions}
              itemSlug={article.slug}
            />
            {article.published?.value && (
              <p className="t-copy-lighter">
                <PrecisionDate
                  data={article.published}
                  label="common.published"
                />
              </p>
            )}
          </Styled.DataBlock>
          {article.abstract ? (
            <Styled.Summary aria-label={t("glossary.abstract")}>
              <FullText data={article.abstract} />
            </Styled.Summary>
          ) : (
            article.summary && (
              <Styled.Summary>{article.summary}</Styled.Summary>
            )
          )}
          {article.pdfVersion?.asset && (
            <Styled.DownloadButton>
              <AssetDownloadButton data={article.pdfVersion.asset} />
            </Styled.DownloadButton>
          )}
        </Styled.LeftSide>
        <Styled.RightSide className="t-label-sm">
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
        </Styled.RightSide>
      </Styled.HeroInner>
    </header>
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
