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
    <Styled.ItemWrapper>
      <Styled.ItemCover
        className={index % 2 === 0 ? "a-bg-neutral90" : "a-bg-neutral80"}
      >
        <NamedLink
          route="collection"
          routeParams={{ slug: journal.slug }}
          passHref
        >
          <Styled.CoverLink>
            <CoverImage
              id={journal.id}
              title={journal.title}
              data={journal.thumbnail}
              maxWidth={300}
              maxHeight={coverHeight}
              usePlaceholder
            />
          </Styled.CoverLink>
        </NamedLink>
      </Styled.ItemCover>
      <NamedLink
        route="collection"
        routeParams={{ slug: journal.slug }}
        passHref
      >
        <Styled.ItemText as="a">
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
        </Styled.ItemText>
      </NamedLink>
    </Styled.ItemWrapper>
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
    id
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
