import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { formatDate } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import * as Styled from "./RelatedJournal.styles";
import { NamedLink, CoverImage } from "components/atomic";
import { RelatedJournalFragment$key } from "@/relay/RelatedJournalFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function RelatedJournal({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return journal ? (
    <NamedLink
      route={getRouteByEntityType(journal.__typename) || "home"}
      routeParams={{ slug: journal.slug }}
      passHref
    >
      <Styled.ItemLink>
        <Styled.ItemCover>
          <CoverImage
            title={journal.title}
            id={journal.id}
            data={journal.thumbnail}
            maxWidth={186}
            maxHeight={280}
          />
        </Styled.ItemCover>
        <Styled.ItemText>
          <Styled.ItemHeader>{journal.title}</Styled.ItemHeader>
          {journal.subtitle && (
            <Styled.ItemSubheader>{journal.subtitle}</Styled.ItemSubheader>
          )}
          <Styled.ItemMetadata className="t-copy-sm a-color-lighter">
            {journal.issues.pageInfo.totalCount ? (
              <div>
                {t("layouts.issue_count", {
                  count: journal.issues.pageInfo.totalCount,
                })}
              </div>
            ) : null}
            {journal.updatedAt && (
              <div>
                {t("common.last_updated", {
                  value: formatDate(journal.updatedAt, "L/d/yy"),
                })}
              </div>
            )}
          </Styled.ItemMetadata>
        </Styled.ItemText>
      </Styled.ItemLink>
    </NamedLink>
  ) : null;
}

interface Props {
  data?: RelatedJournalFragment$key | null;
}

const fragment = graphql`
  fragment RelatedJournalFragment on Collection {
    __typename
    id
    title
    subtitle
    slug
    updatedAt
    thumbnail {
      storage
      ...CoverImageFragment
    }
    issues: collections(schema: "nglp:journal_issue") {
      pageInfo {
        totalCount
      }
    }
  }
`;
