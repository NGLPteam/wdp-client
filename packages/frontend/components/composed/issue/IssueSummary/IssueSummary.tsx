import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import * as Styled from "./IssueSummary.styles";
import { PrecisionDate, CoverImage } from "components/atomic";
import { IssueSummaryFragment$key } from "@/relay/IssueSummaryFragment.graphql";
import Summary from "components/layout/Summary";

export default function IssueSummary({ data, showReadMore }: Props) {
  const issue = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  const issueNumber = useMemo(() => {
    if (!issue) return null;

    const issueNumber = issue?.issueNumber?.content;
    const numberString = startCase(
      `${t("schema.nglp.journal_issue")} ${issueNumber}`
    );
    return issueNumber &&
      issueNumber !== "0" &&
      issue.title.toLocaleLowerCase() !== numberString.toLocaleLowerCase()
      ? numberString
      : null;
  }, [issue, t]);

  return issue ? (
    <Summary
      route="collection"
      routeParams={{ slug: issue.slug }}
      title={issue.title}
      subtitle={issue.subtitle}
      summary={issue.summary}
      thumbnail={
        <CoverImage
          id={issue.id}
          title={issue.title}
          data={issue.cover}
          maxWidth={120}
          maxHeight={160}
        />
      }
      metadata={
        <>
          {issueNumber && <p>{issueNumber}</p>}
          {issue.volume && <p>{issue.volume.title}</p>}
          <Styled.ItemPrimaryMetadata>
            {issue.journal && <li>{issue.journal.title}</li>}
            {issue.published.value && (
              <li>
                <PrecisionDate
                  label={t("date.published")}
                  data={issue.published}
                />
              </li>
            )}
          </Styled.ItemPrimaryMetadata>
          {issue.articles.pageInfo && (
            <p className="t-copy-italic t-copy-light t-capitalize">
              {t("counts.journal_article", {
                count: issue.articles.pageInfo.totalCount,
              })}
            </p>
          )}
        </>
      }
      showReadMore={showReadMore}
    />
  ) : null;
}

interface Props {
  /* Collection data */
  data?: IssueSummaryFragment$key | null;
  showReadMore?: boolean;
}

const fragment = graphql`
  fragment IssueSummaryFragment on Collection
  @argumentDefinitions(showJournal: { type: "Boolean", defaultValue: false }) {
    id
    title
    subtitle
    slug
    summary
    cover: thumbnail {
      ...CoverImageFragment
    }
    published {
      value
      ...PrecisionDateFragment
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Collection {
        title
      }
    }
    journal: ancestorOfType(schema: "nglp:journal") @include(if: $showJournal) {
      ... on Collection {
        title
      }
    }
    articles: items(schema: "nglp:journal_article") {
      pageInfo {
        totalCount
      }
    }
    issueNumber: schemaProperty(fullPath: "number") {
      ... on StringProperty {
        content
      }
    }
  }
`;
