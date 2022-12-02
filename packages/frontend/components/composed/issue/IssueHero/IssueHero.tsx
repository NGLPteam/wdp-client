import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./IssueHero.styles";
import { IssueHeroFragment$key } from "@/relay/IssueHeroFragment.graphql";
import {
  DotList,
  PrecisionDate,
  DOI,
  CoverImage,
  Markdown,
  Alert,
} from "components/atomic";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";
import JournalHeroCompact from "components/composed/journal/JournalHeroCompact";
import JournalHeroMetadata from "components/composed/journal/JournalHeroMetadata";
import { SecondaryHero } from "components/layout/hero";
import { getEntityDisplayName } from "helpers";

export default function IssueHero({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const visibilityMessage =
    issue?.visibility === "HIDDEN" || issue?.currentlyHidden
      ? t("messages.hidden", { schema: t("schema.nglp.journal_issue") })
      : null;

  return issue ? (
    <>
      <JournalHeroCompact data={issue.journal} />
      <SecondaryHero
        Alert={
          visibilityMessage && (
            <Alert message={visibilityMessage} badge color="blue" />
          )
        }
        title={<Markdown.Title>{getEntityDisplayName(issue)}</Markdown.Title>}
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
              <DotList className="t-copy-lighter">
                {issue.published.value && (
                  <li>
                    <PrecisionDate data={issue.published} />
                  </li>
                )}
              </DotList>
              {issue.summary && (
                <Markdown.Summary>{issue.summary}</Markdown.Summary>
              )}
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
    visibility
    currentlyHidden

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

    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ... on AssetProperty {
        asset {
          ...AssetDownloadButtonFragment
        }
      }
    }

    ...getEntityDisplayNameFragment
  }
`;
