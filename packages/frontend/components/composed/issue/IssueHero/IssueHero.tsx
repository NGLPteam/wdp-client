import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./IssueHero.styles";
import { IssueHeroFragment$key } from "@/relay/IssueHeroFragment.graphql";
import CoverImage from "components/atomic/CoverImage";
import {
  CCLicense,
  DotList,
  OpenAccess,
  PeerReviewed,
  PrecisionDate,
  DOI,
  ISSN,
} from "components/atomic";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";

export default function IssueHero({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return issue ? (
    <header>
      <div className="a-bg-custom10">
        <Styled.HeroInner className="l-container-wide">
          {issue.journal && (
            <>
              <Styled.Title>{issue.journal.title}</Styled.Title>
              {issue.journal.subtitle && (
                <Styled.JournalMeta>
                  <div>{issue.journal.subtitle}</div>
                </Styled.JournalMeta>
              )}
            </>
          )}
          <Styled.IssueWrapper>
            <Styled.IssueText>
              {issue.thumbnail?.storage && (
                <Styled.IssueCover>
                  <CoverImage
                    id={issue.id}
                    title={issue.title}
                    data={issue.thumbnail}
                    maxWidth={225}
                    maxHeight={300}
                  />
                </Styled.IssueCover>
              )}
              <Styled.Issue>
                <Styled.IssueTitle as="h3">{issue.title}</Styled.IssueTitle>
                {issue.volume && (
                  <Styled.Volume>{issue.volume.title}</Styled.Volume>
                )}
                <Styled.Description>
                  {issue.volume && (
                    <Styled.VolumeMobile>
                      {issue.volume.title}
                    </Styled.VolumeMobile>
                  )}
                  <DotList className="t-copy-lighter">
                    {issue.published && (
                      <li>
                        <PrecisionDate
                          data={issue.published}
                          label={t("common.published")}
                        />
                      </li>
                    )}
                  </DotList>
                  {issue.summary && <p>{issue.summary}</p>}
                </Styled.Description>
                {issue.pdfVersion && (
                  <AssetDownloadButton data={issue.pdfVersion} />
                )}
              </Styled.Issue>
            </Styled.IssueText>
            <Styled.IssueMeta className="t-label-sm">
              {issue.journal && <ISSN data={issue.journal} />}
              <DOI data={issue} />
              {issue.journal && (
                <>
                  <CCLicense data={issue.journal} />
                  <OpenAccess data={issue.journal} />
                  <PeerReviewed data={issue.journal} />
                </>
              )}
            </Styled.IssueMeta>
          </Styled.IssueWrapper>
        </Styled.HeroInner>
      </div>
    </header>
  ) : null;
}

interface Props {
  data?: IssueHeroFragment$key | null;
}

const fragment = graphql`
  fragment IssueHeroFragment on Collection {
    id
    title
    subtitle
    summary
    ...DOIFragment
    published {
      ...PrecisionDateFragment
    }
    thumbnail {
      storage
      ...CoverImageFragment
    }
    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Entity {
        title
        subtitle
      }
      ...ISSNFragment
      ...PeerReviewedFragment
      ...OpenAccessFragment
      ...CCLicenseFragment
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Entity {
        title
      }
    }
    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ...AssetDownloadButtonFragment
    }
  }
`;
