import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import {
  CoverImage,
  PrecisionDate,
  NamedLink,
  DotList,
  Button,
} from "components/atomic";
import ArticleSummary from "components/composed/article/ArticleSummary";
import { getEntityDisplayName } from "helpers";
import {
  FeaturedIssueFragment$data,
  FeaturedIssueFragment$key,
} from "@/relay/FeaturedIssueFragment.graphql";
import * as Styled from "./FeaturedIssue.styles";

export default function FeaturedIssue({ data, header }: Props) {
  const { t } = useTranslation();

  const issue = useMaybeFragment(fragment, data);

  const articles = issue?.ordering?.children?.edges;

  const featuredArticles = issue?.featuredArticles?.entities;

  return issue ? (
    <Styled.Section className="a-bg-netural00">
      <Styled.Inner className="l-container-wide">
        <Styled.ImageBlock>
          <NamedLink href={`/collections/${issue.slug}`}>
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
        <Styled.TextBlock>
          <Styled.Label className="t-label-lg">
            {t(header || "layouts.featured_issue")}
          </Styled.Label>
          <Styled.TitleBlock>
            <h3>
              <NamedLink href={`/collections/${issue.slug}`}>
                <Styled.IssueTitle className="a-link">
                  {getEntityDisplayName(issue)}
                </Styled.IssueTitle>
              </NamedLink>
            </h3>
            {issue.subtitle && (
              <div className="t-copy-lighter t-copy-italic">
                {issue.subtitle}
              </div>
            )}
            <DotList className="t-copy-lighter">
              {issue.published.value && (
                <li>
                  <PrecisionDate data={issue.published} />
                </li>
              )}
              {issue.articles && (
                <li>
                  {t("counts.journal_article", {
                    count: issue.articles.pageInfo.totalCount,
                  })}
                </li>
              )}
            </DotList>
          </Styled.TitleBlock>
          <Styled.ArticleList>
            {featuredArticles && featuredArticles.length > 0
              ? featuredArticles.map((entity: FeaturedArticleNode, i) => (
                  <Styled.Item key={entity.slug || i}>
                    <ArticleSummary data={entity} showReadMore />
                  </Styled.Item>
                ))
              : articles &&
                articles.map(({ node }: ArticleNode) => (
                  <Styled.Item key={node.entry.slug}>
                    <ArticleSummary data={node.entry} showReadMore />
                  </Styled.Item>
                ))}
          </Styled.ArticleList>
          {issue?.ordering?.identifier && issue?.slug && (
            <Styled.Footer>
              <NamedLink
                href={`/collections/${issue.slug}/browse/${issue.ordering.identifier}`}
              >
                <Button as="div">{t("layouts.see_all_articles")}</Button>
              </NamedLink>
            </Styled.Footer>
          )}
        </Styled.TextBlock>
      </Styled.Inner>
    </Styled.Section>
  ) : null;
}

type Props = {
  data?: FeaturedIssueFragment$key | null;
  header?: string;
};

type FeaturedArticleNode = NonNullable<
  NonNullable<FeaturedIssueFragment$data["featuredArticles"]>["entities"]
>[number];

type ArticleNode = NonNullable<
  FeaturedIssueFragment$data["ordering"]
>["children"]["edges"][number];

const fragment = graphql`
  fragment FeaturedIssueFragment on Collection {
    id
    title
    subtitle
    slug

    thumbnail {
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

    articles: items(schema: "nglp:journal_article") {
      pageInfo {
        totalCount
      }
    }

    ordering(identifier: "articles") {
      identifier
      children(perPage: 3) {
        edges {
          node {
            entry {
              ... on Sluggable {
                slug
              }
              ...ArticleSummaryFragment
            }
          }
        }
        pageInfo {
          totalCount
        }
      }
    }

    featuredArticles: schemaProperty(fullPath: "featured_articles") {
      ... on EntitiesProperty {
        entities {
          ... on Sluggable {
            slug
          }
          ...ArticleSummaryFragment
        }
      }
    }

    ...getEntityDisplayNameFragment
  }
`;
