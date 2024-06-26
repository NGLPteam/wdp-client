import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { NamedLink, CoverImage } from "components/atomic";
import { FeaturedJournalFragment$key } from "@/relay/FeaturedJournalFragment.graphql";
import * as Styled from "./FeaturedJournal.styles";

export default function FeaturedJournal({ data, coverHeight }: Props) {
  const journal = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return journal ? (
    <NamedLink href={`/collections/${journal.slug}`}>
      <Styled.ItemWrapper as="span">
        <Styled.ItemCover>
          <Styled.CoverWrapper>
            <CoverImage
              id={journal.id}
              title={journal.title}
              data={journal.thumbnail}
              maxWidth={300}
              maxHeight={coverHeight}
            />
          </Styled.CoverWrapper>
        </Styled.ItemCover>
        <Styled.ItemText>
          <Styled.ItemTitle>
            <Styled.ItemLinkText>{journal.title}</Styled.ItemLinkText>
          </Styled.ItemTitle>
          {journal.subtitle && (
            <Styled.ItemSubtitle className="t-copy">
              <Styled.ItemLinkText>{journal.subtitle}</Styled.ItemLinkText>
            </Styled.ItemSubtitle>
          )}
          <Styled.ItemData className="t-copy-sm a-color-lighter">
            {journal.issues.pageInfo ? (
              <span>
                {t("counts.journal_issue", {
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
      </Styled.ItemWrapper>
    </NamedLink>
  ) : null;
}

interface Props {
  /* Collection data */
  data?: FeaturedJournalFragment$key | null;
  coverHeight: number;
}

const fragment = graphql`
  fragment FeaturedJournalFragment on Collection {
    id
    title
    subtitle
    slug
    updatedAt
    thumbnail {
      ...CoverImageFragment
    }
    issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
      pageInfo {
        totalCount
      }
    }
  }
`;
