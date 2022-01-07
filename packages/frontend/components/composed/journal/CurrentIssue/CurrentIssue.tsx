import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./CurrentIssue.styles";
import {
  CoverImage,
  PrecisionDate,
  NamedLink,
  DotList,
  Button,
} from "components/atomic";
import ArticleSummary from "components/composed/article/ArticleSummary";
import {
  CurrentIssueFragment$data,
  CurrentIssueFragment$key,
} from "@/relay/CurrentIssueFragment.graphql";

export default function CurrentIssue({ data }: Props) {
  const { t } = useTranslation();
  const issue = useMaybeFragment(fragment, data);
  const articles = issue?.ordering?.articles.edges;
  const hasImage = !!issue?.thumbnail?.storage;

  return issue ? (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide" $hasImage={hasImage}>
        {hasImage && (
          <Styled.ImageBlock>
            <NamedLink
              route="collection"
              routeParams={{ slug: issue.slug }}
              passHref
            >
              <Styled.ImageLink>
                <CoverImage
                  id={issue.id}
                  title={issue.title}
                  data={issue.thumbnail}
                  maxWidth={278}
                  maxHeight={370}
                />
              </Styled.ImageLink>
            </NamedLink>
          </Styled.ImageBlock>
        )}
        <Styled.TextBlock>
          <Styled.Label className="t-label-lg">
            {t("layouts.current_issue")}
          </Styled.Label>
          <Styled.TitleBlock>
            <h3>
              <NamedLink
                route="collection"
                routeParams={{ slug: issue.slug }}
                passHref
              >
                <a>{issue.title}</a>
              </NamedLink>
            </h3>
            {issue.subtitle && (
              <div className="t-copy-lighter t-copy-italic">
                {issue.subtitle}
              </div>
            )}
            <DotList className="t-copy-lighter">
              {issue.volume && <li>{issue.volume?.title}</li>}
              {issue.published.value && (
                <li>
                  <PrecisionDate
                    data={issue.published}
                    label={t("common.published")}
                  />
                </li>
              )}
            </DotList>
          </Styled.TitleBlock>
          <Styled.ArticleList>
            {articles &&
              articles.map(({ node: { entry } }: ArticleNode) => (
                <Styled.Item key={entry.slug}>
                  <ArticleSummary data={entry} showReadMore />
                </Styled.Item>
              ))}
          </Styled.ArticleList>
          {issue?.ordering?.identifier &&
            issue?.slug &&
            issue?.ordering?.articles?.pageInfo?.totalCount > 3 && (
              <Styled.Footer>
                <NamedLink
                  route="collection"
                  routeParams={{ slug: issue.slug }}
                  passHref
                >
                  <Button as="a">{t("layouts.see_all_articles")}</Button>
                </NamedLink>
              </Styled.Footer>
            )}
        </Styled.TextBlock>
      </Styled.Inner>
    </section>
  ) : null;
}

type Props = {
  data?: CurrentIssueFragment$key | null;
};

type ArticleNode = CurrentIssueFragment$data["items"]["edges"][number];

const fragment = graphql`
  fragment CurrentIssueFragment on Collection {
    id
    title
    subtitle
    slug
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
    ordering(identifier: "articles") {
      identifier
      articles: children(perPage: 3) {
        edges {
          node {
            entry {
              ... on Sluggable {
                slug
              }
              ... on Entity {
                ...ArticleSummaryFragment
              }
            }
          }
        }
        pageInfo {
          totalCount
        }
      }
    }
  }
`;
