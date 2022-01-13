import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./RelatedIssues.styles";
import { NamedLink, CoverImage, PrecisionDate } from "components/atomic";
import { RelatedIssueBlockFragment$key } from "@/relay/RelatedIssueBlockFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function RelatedIssueBlock({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return issue && issue.slug ? (
    <>
      <Styled.ItemCover>
        <NamedLink
          route={getRouteByEntityType(issue.__typename) || "home"}
          routeParams={{ slug: issue.slug }}
          passHref
        >
          <Styled.ItemCoverLink>
            <CoverImage
              title={issue.title}
              id={issue.id}
              data={issue.thumbnail}
              maxWidth={263}
              maxHeight={280}
              usePlaceholder
            />
          </Styled.ItemCoverLink>
        </NamedLink>
      </Styled.ItemCover>
      <Styled.ItemText>
        <h4>
          <NamedLink
            route={getRouteByEntityType(issue.__typename) || "home"}
            routeParams={{ slug: issue.slug }}
            passHref
          >
            <a>{issue.title}</a>
          </NamedLink>
        </h4>
        {issue.subtitle && <Styled.Subtitle>{issue.subtitle}</Styled.Subtitle>}
        <div className="t-copy-sm a-color-lighter">
          {issue.volume && <p>{issue.volume.title}</p>}
          {issue.journal && (
            <p className="t-copy-italic">{issue.journal.title}</p>
          )}
          {issue.published.value && (
            <p>
              <PrecisionDate data={issue.published} label="common.published" />
            </p>
          )}
          {issue.articles.pageInfo.totalCount >= 0 && (
            <p>
              {t("layouts.article_count", {
                count: issue.articles.pageInfo.totalCount,
              })}
            </p>
          )}
        </div>
      </Styled.ItemText>
    </>
  ) : null;
}

type Props = {
  data?: RelatedIssueBlockFragment$key | null;
};

const fragment = graphql`
  fragment RelatedIssueBlockFragment on Collection {
    __typename
    title
    subtitle
    slug
    id
    thumbnail {
      storage
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
    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Collection {
        title
      }
    }
    articles: collections(schema: "nglp:journal_article") {
      pageInfo {
        totalCount
      }
    }
  }
`;
