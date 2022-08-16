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

  const hasNonNumericTitle = useMemo(() => {
    if (!issue) return null;
    const titleRegex = /Issue\s[0-9]+/i;
    return !titleRegex.test(issue.title);
  }, [issue]);

  const issueNumber = useMemo(() => {
    if (!issue) return null;

    const issueNumber = issue?.issueNumber?.content;

    return issueNumber && issueNumber !== "0" && hasNonNumericTitle
      ? startCase(`${t("schema.nglp.journal_issue")} ${issueNumber}`)
      : null;
  }, [issue, hasNonNumericTitle, t]);

  const formattedTitle = useMemo(() => {
    if (!issue) return null;

    const volumeNum = issue.volumeNumber?.integerValue;
    const issueNum = issue?.issueNumber?.content;

    return hasNonNumericTitle
      ? issue.title
      : !volumeNum
      ? t("list.issue_title_no_vol", { issueNum })
      : t("list.issue_title", { volumeNum, issueNum });
  }, [issue, t, hasNonNumericTitle]);

  return issue ? (
    <Summary
      route="collection"
      routeParams={{ slug: issue.slug }}
      title={formattedTitle}
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
    volumeNumber: schemaProperty(fullPath: "volume.sortable_number") {
      ... on IntegerProperty {
        integerValue
      }
    }
  }
`;
