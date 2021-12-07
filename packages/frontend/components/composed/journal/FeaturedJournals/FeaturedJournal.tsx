import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./FeaturedJournals.styles";
import { NamedLink, CoverImage } from "components/atomic";
import { FeaturedJournalFragment$key } from "@/relay/FeaturedJournalFragment.graphql";

export default function FeaturedJournal({ data, index, coverHeight }: Props) {
  const journal = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return journal ? (
    <NamedLink route="collection" routeParams={{ slug: journal.slug }} passHref>
      <Styled.ItemLink>
        <Styled.ItemCover
          className={index % 2 === 0 ? "a-bg-neutral90" : "a-bg-neutral80"}
        >
          <CoverImage
            data={journal.thumbnail}
            maxWidth={300}
            maxHeight={coverHeight}
          />
        </Styled.ItemCover>
        <Styled.ItemTitle>{journal.title}</Styled.ItemTitle>
        <Styled.ItemData className="t-copy-sm a-color-lighter">
          {journal.issues.pageInfo.totalCount ? (
            <span>
              {t("layouts.issue_count", {
                count: journal.issues.pageInfo.totalCount,
              })}
            </span>
          ) : null}
          {journal.updatedAt && (
            <span>
              {t("common.last_updated", {
                value: formatDate(journal.updatedAt, "L/d/yy"),
              })}
            </span>
          )}
        </Styled.ItemData>
      </Styled.ItemLink>
    </NamedLink>
  ) : null;
}

interface Props {
  /* Collection data */
  data?: FeaturedJournalFragment$key | null;
  index: number;
  coverHeight: number;
}

const fragment = graphql`
  fragment FeaturedJournalFragment on Collection {
    title
    slug
    updatedAt
    thumbnail {
      ...CoverImageFragment
    }
    issues: collections(schema: "nglp:journal_issue") {
      pageInfo {
        totalCount
      }
    }
  }
`;
