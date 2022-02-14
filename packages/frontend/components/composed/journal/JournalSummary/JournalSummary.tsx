import React from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import * as Styled from "./JournalSummary.styles";
import {
  ReadMoreLink,
  DotList,
  NamedLink,
  CoverImage,
  Link,
} from "components/atomic";
import { JournalSummaryFragment$key } from "@/relay/JournalSummaryFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function JournalSummary({ data, showReadMore }: Props) {
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const route = getRouteByEntityType(journal?.__typename);

  return journal ? (
    <Styled.Wrapper>
      <NamedLink
        route="collection"
        routeParams={{ slug: journal.slug }}
        passHref
      >
        <Styled.ItemCoverLink>
          <CoverImage
            id={journal.id}
            title={journal.title}
            data={journal.cover}
            maxWidth={120}
            maxHeight={160}
          />
        </Styled.ItemCoverLink>
      </NamedLink>
      <Styled.TextBlock>
        <Styled.Headers>
          {journal.title && journal.slug && route && (
            <h4>
              <NamedLink
                route={route}
                routeParams={{ slug: journal.slug }}
                passHref
              >
                <Link>{journal.title}</Link>
              </NamedLink>
            </h4>
          )}
          {journal.subtitle && (
            <h5 className="t-copy-italic t-copy-lighter">{journal.subtitle}</h5>
          )}
        </Styled.Headers>
        <Styled.Metadata>
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
                {t("layouts.issue_count", {
                  count: journal.issues.pageInfo.totalCount,
                })}
              </li>
            )}
          </DotList>
        </Styled.Metadata>
        {journal.summary && (
          <Styled.Summary className="t-copy-lighter">
            {journal.summary}
          </Styled.Summary>
        )}
        {journal.slug && route && showReadMore && (
          <NamedLink
            route={route}
            routeParams={{ slug: journal.slug }}
            passHref
          >
            <ReadMoreLink className="t-label-sm" />
          </NamedLink>
        )}
      </Styled.TextBlock>
    </Styled.Wrapper>
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
