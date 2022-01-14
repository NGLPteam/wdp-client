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
  SquareThumbnail,
} from "components/atomic";
import { JournalSummaryFragment$key } from "@/relay/JournalSummaryFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function JournalSummary({ data, showReadMore }: Props) {
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const route = getRouteByEntityType(journal?.__typename);

  return journal ? (
    <Styled.Wrapper>
      <Styled.Text>
        <Styled.Headers>
          {journal.title && journal.slug && route && (
            <h4>
              <NamedLink
                route={route}
                routeParams={{ slug: journal.slug }}
                passHref
              >
                <a>{journal.title}</a>
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
      </Styled.Text>
      {journal.thumbnail.storage && route && journal.slug && (
        <NamedLink route={route} routeParams={{ slug: journal.slug }} passHref>
          <Styled.ThumbnailLink>
            <SquareThumbnail data={journal.thumbnail} />
          </Styled.ThumbnailLink>
        </NamedLink>
      )}
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
    slug
    title
    subtitle
    updatedAt
    summary
    thumbnail {
      storage
      ...SquareThumbnailFragment
    }
    issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
      pageInfo {
        totalCount
      }
    }
  }
`;
