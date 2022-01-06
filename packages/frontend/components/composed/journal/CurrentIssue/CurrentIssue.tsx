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
} from "components/atomic";
import ArticleSummary from "components/composed/article/ArticleSummary";
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
            <Styled.Subtitle className="t-copy-lighter t-copy-italic">
              {issue.subtitle}
            </Styled.Subtitle>
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
              articles.map(({ node }: ArticleNode) => (
                <Styled.Item key={node.slug}>
                  <ArticleSummary data={node} showReadMore />
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
    items(perPage: 3) {
      edges {
        node {
          slug
          ...ArticleSummaryFragment
        }
      }
    }
  }
`;
