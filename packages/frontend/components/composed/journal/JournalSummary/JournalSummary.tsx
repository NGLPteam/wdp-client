import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { DotList, CoverImage } from "components/atomic";
import Summary from "components/layout/Summary";
import { JournalSummaryFragment$key } from "@/relay/JournalSummaryFragment.graphql";

export default function JournalSummary({ data, showReadMore }: Props) {
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return journal ? (
    <Summary
      route="collection"
      routeParams={{ slug: journal.slug }}
      title={journal.title}
      subtitle={journal.subtitle}
      summary={journal.summary}
      thumbnail={
        <CoverImage
          id={journal.id}
          title={journal.title}
          data={journal.cover}
          maxWidth={120}
          maxHeight={160}
        />
      }
      metadata={
        <DotList className="t-copy-sm t-copy-lighter">
          {journal.updatedAt && (
            <li>
              {t("common.last_updated", {
                value: formatDate(journal.updatedAt, "L/d/yy"),
              })}
            </li>
          )}
          {journal.issues && (
            <li>
              {t("counts.journal_issue", {
                count: journal.issues.pageInfo.totalCount,
              })}
            </li>
          )}
        </DotList>
      }
      showReadMore={showReadMore}
    />
  ) : null;
}

interface Props {
  data?: JournalSummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment JournalSummaryFragment on Collection {
    __typename
    id
    slug
    title
    subtitle
    updatedAt
    summary
    cover: thumbnail {
      storage
      ...CoverImageFragment
    }
    issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
      pageInfo {
        totalCount
      }
    }
  }
`;
