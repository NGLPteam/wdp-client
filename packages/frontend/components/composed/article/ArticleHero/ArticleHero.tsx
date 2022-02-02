import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleHero.styles";
import {
  PrecisionDate,
  PeerReviewed,
  CCLicense,
  PreprintVersion,
  OpenAccess,
  DOI,
} from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";
import { ArticleHeroFragment$key } from "@/relay/ArticleHeroFragment.graphql";

export default function ArticleHero({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

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
            <p className="t-copy-lighter">
              {article.published && (
                <PrecisionDate
                  data={article.published}
                  label="common.published"
                />
              )}
            </p>
          </Styled.DataBlock>
          {article.summary && (
            <Styled.Summary>{article.summary}</Styled.Summary>
          )}
          {article.pdfVersion?.asset && (
            <AssetDownloadButton data={article.pdfVersion.asset} />
          )}
        </Styled.LeftSide>
        <Styled.RightSide className="t-label-sm">
          {article.journal && <PreprintVersion data={article.journal} />}
          <DOI data={article} />
          {article.journal && (
            <>
              <CCLicense data={article.journal} />
              <OpenAccess data={article.journal} />
              <PeerReviewed data={article.journal} />
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
  }
`;
