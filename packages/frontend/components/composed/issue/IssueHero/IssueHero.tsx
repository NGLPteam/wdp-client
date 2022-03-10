import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./IssueHero.styles";
import { IssueHeroFragment$key } from "@/relay/IssueHeroFragment.graphql";
import { DotList, PrecisionDate, DOI, CoverImage } from "components/atomic";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";
import JournalHeroCompact from "components/composed/journal/JournalHeroCompact";
import JournalHeroMetadata from "components/composed/journal/JournalHeroMetadata";
import { SecondaryHero } from "components/layout/hero";

export default function IssueHero({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return issue ? (
    <>
      <JournalHeroCompact data={issue.journal} />
      <SecondaryHero
        title={
          <>
            <>{issue.title}</>
            {issue.volume && (
              <Styled.Volume>{issue.volume.title}</Styled.Volume>
            )}
          </>
        }
        ThumbnailComponent={
          <CoverImage
            id={issue.id}
            title={issue.title}
            data={issue.thumbnail}
            maxWidth={225}
            maxHeight={300}
          />
        }
        LeftComponent={
          <>
            <Styled.Summary>
              {issue.volume && (
                <Styled.VolumeMobile>{issue.volume.title}</Styled.VolumeMobile>
              )}
              <DotList className="t-copy-lighter">
                {issue.published.value && (
                  <li>
                    <PrecisionDate
                      data={issue.published}
                      label={t("common.published")}
                    />
                  </li>
                )}
              </DotList>
              {issue.summary && <div>{issue.summary}</div>}
            </Styled.Summary>
            {issue.pdfVersion?.asset && (
              <AssetDownloadButton data={issue.pdfVersion.asset} />
            )}
          </>
        }
        RightComponent={
          <>
            <DOI data={issue} />
            <JournalHeroMetadata data={issue.journal} />
          </>
        }
      />
    </>
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
      value
      ...PrecisionDateFragment
    }

    thumbnail {
      ...CoverImageFragment
    }

    journal: ancestorOfType(schema: "nglp:journal") {
      ...JournalHeroCompactFragment
      ...JournalHeroMetadataFragment
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Entity {
        title
      }
    }

    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ... on AssetProperty {
        asset {
          ...AssetDownloadButtonFragment
        }
      }
    }
  }
`;
