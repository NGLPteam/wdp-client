import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./IssueHero.styles";
import { IssueHeroFragment$key } from "@/relay/IssueHeroFragment.graphql";
import CoverImage from "components/atomic/CoverImage";
import { DotList, PrecisionDate } from "components/atomic";
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
              <Styled.JournalMeta>
                <div>Journal subtitle goes here</div>
              </Styled.JournalMeta>
            </>
          )}
          <Styled.IssueWrapper>
            <Styled.IssueText>
              {issue.thumbnail?.storage && (
                <CoverImage
                  data={issue.thumbnail}
                  maxWidth={225}
                  maxHeight={300}
                />
              )}
              <Styled.Issue>
                <h3>
                  {issue.title}
                  {issue.volume && (
                    <Styled.Volume className="t-copy-lighter">
                      {issue.volume.title}
                    </Styled.Volume>
                  )}
                </h3>
                {issue.summary && (
                  <Styled.Description>
                    <DotList className="t-copy-lighter">
                      {issue.published && (
                        <li>
                          <PrecisionDate
                            data={issue.published}
                            label={t("common.published")}
                          />
                        </li>
                      )}
                      <li>Metadata</li>
                    </DotList>
                    <p>{issue.summary}</p>
                  </Styled.Description>
                )}
                {issue.pdfVersion && (
                  <AssetDownloadButton data={issue.pdfVersion} />
                )}
              </Styled.Issue>
            </Styled.IssueText>
            <Styled.IssueMeta>
              {issue.doi && (
                <span className="t-label-sm">
                  DOI: <Styled.Number>{issue.doi}</Styled.Number>
                </span>
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
    title
    summary
    doi
    published {
      ...PrecisionDateFragment
    }
    thumbnail {
      storage
      ...CoverImageFragment
    }
    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Collection {
        title
      }
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Collection {
        title
      }
    }
    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ...AssetDownloadButtonFragment
    }
  }
`;
