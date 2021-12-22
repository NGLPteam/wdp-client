import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./CurrentIssue.styles";
import {
  CoverImage,
  ArrowLink,
  PrecisionDate,
  NamedLink,
  DotList,
} from "components/atomic";
import { ArticleSummary } from "components/layout";
import ContributorsList from "components/composed/contributor/ContributorsList";
import {
  CurrentIssueFragment$data,
  CurrentIssueFragment$key,
} from "@/relay/CurrentIssueFragment.graphql";

export default function CurrentIssue({ data }: Props) {
  const { t } = useTranslation();
  const issue = useMaybeFragment(fragment, data);
  const articles = issue?.items.edges;
  const hasImage = !!issue?.thumbnail?.storage;

  return issue ? (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide" $hasImage={hasImage}>
        {hasImage && (
          <NamedLink
            route="collection"
            routeParams={{ slug: issue.slug }}
            passHref
          >
            <Styled.ImageBlock as="a">
              <CoverImage
                id={issue.id}
                title={issue.title}
                data={issue.thumbnail}
                maxWidth={278}
                maxHeight={370}
              />
            </Styled.ImageBlock>
          </NamedLink>
        )}
        <Styled.TextBlock>
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
              <li>Additional metadata</li>
            </DotList>
          </Styled.TitleBlock>
          <Styled.ArticleList>
            {articles &&
              articles.map((article: ArticleNode) => (
                <Styled.Item key={article.node.slug}>
                  <ArticleSummary
                    title={
                      <NamedLink
                        route="item"
                        routeParams={{ slug: article.node.slug }}
                        passHref
                      >
                        <a>{article.node.title}</a>
                      </NamedLink>
                    }
                    subtitle={article.node.subtitle}
                    summary={
                      article.node.summary && (
                        <p className="t-copy-sm">{article.node.summary}</p>
                      )
                    }
                    contributors={
                      article.node.contributions && (
                        <ContributorsList data={article.node.contributions} />
                      )
                    }
                    readMore={
                      article.node.slug && (
                        <NamedLink
                          route="item"
                          routeParams={{ slug: article.node.slug }}
                          passHref
                        >
                          <ArrowLink className="t-label-sm">
                            {t("common.read_more")}
                          </ArrowLink>
                        </NamedLink>
                      )
                    }
                  />
                </Styled.Item>
              ))}
          </Styled.ArticleList>
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
    items(perPage: 3) {
      edges {
        node {
          title
          subtitle
          slug
          summary
          contributions {
            ...ContributorsListFragment
          }
        }
      }
    }
  }
`;
