import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./CurrentIssue.styles";
import { CoverImage, ArrowLink, PrecisionDate } from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import { CurrentIssueFragment$key } from "@/relay/CurrentIssueFragment.graphql";

export default function CurrentIssue({ data }: Props) {
  const { t } = useTranslation();
  const result = useMaybeFragment(fragment, data);
  const issue = result?.edges.length ? result.edges[0].node : null;
  const articles = issue?.items.edges.slice(0, 3);

  return issue ? (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide l-grid">
        <Styled.Left>
          <CoverImage data={issue.thumbnail} maxWidth={278} maxHeight={370} />
          <Styled.Meta className="t-copy">
            <p>{issue.ancestorOfType?.title}</p>
            <p className="t-copy-lighter">Volume XX</p>
            <p className="t-copy-lighter">Issue XX</p>
            <PrecisionDate data={issue.published} label="Issue date" />
          </Styled.Meta>
        </Styled.Left>
        <Styled.Right>
          <Styled.Title>{issue.title}</Styled.Title>
          {articles &&
            articles.map((article) => (
              <Styled.Item key={article.node.slug}>
                <Styled.ItemTitleBlock>
                  <h4>{article.node.title}</h4>
                  <Styled.ItemSubtitle className="t-copy-italic">
                    Subtitle
                  </Styled.ItemSubtitle>
                </Styled.ItemTitleBlock>
                <div className="t-copy-sm">
                  <ContributorsList data={article.node.contributions} />
                  <p className="t-copy-italic t-copy-lighter">
                    Secondary metadata
                  </p>
                </div>
                {article.node.summary && (
                  <Styled.ItemSummary className="t-copy-lighter">
                    {article.node.summary}
                  </Styled.ItemSummary>
                )}
                <Styled.ItemReadMore
                  as={ArrowLink}
                  label={t("common.read_more")}
                />
              </Styled.Item>
            ))}
        </Styled.Right>
      </Styled.Inner>
    </section>
  ) : null;
}

type Props = {
  data?: CurrentIssueFragment$key | null;
};

const fragment = graphql`
  fragment CurrentIssueFragment on CollectionConnection {
    edges {
      node {
        title
        thumbnail {
          ...CoverImageFragment
        }
        published {
          ...PrecisionDateFragment
        }
        ancestorOfType(schema: "nglp:journal") {
          ... on Collection {
            title
          }
        }
        items(perPage: 3) {
          edges {
            node {
              title
              slug
              summary
              contributions {
                ...ContributorsListFragment
              }
            }
          }
        }
      }
    }
  }
`;
