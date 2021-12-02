import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleHero.styles";
import {
  ArticleHeroFragment$data,
  ArticleHeroFragment$key,
} from "@/relay/ArticleHeroFragment.graphql";
import { Button, PrecisionDate } from "components/atomic";
import ContributorName from "components/composed/contributor/ContributorName";

export default function ArticleHero({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  return article ? (
    <div className="a-bg-custom10">
      <Styled.HeroInner as="header" className="l-container-wide">
        <Styled.LeftSide>
          <Styled.TitleBlock>
            <h2>{article.title}</h2>
            <h4 className="t-copy-italic">Article Subtitle Goes Here</h4>
          </Styled.TitleBlock>
          <Styled.DataBlock>
            {article.contributions.edges.map(
              ({ node }: ContributionNode, i: number) => (
                <strong key={i}>
                  <ContributorName data={node.contributor} />
                  {i < article.contributions.edges.length - 1 && ", "}
                </strong>
              )
            )}
            <p className="t-copy-lighter">
              {article.published && (
                <PrecisionDate
                  data={article.published}
                  label="common.published"
                />
              )}
            </p>
          </Styled.DataBlock>
          {article.summary && (
            <Styled.Summary>{article.summary}</Styled.Summary>
          )}
          <Button size="sm" secondary icon="download">
            Download PDF
          </Button>
        </Styled.LeftSide>
        <Styled.RightSide className="t-label-sm">
          <div>
            DOI: <span className="t-copy-light">{article.doi}</span>
          </div>
        </Styled.RightSide>
      </Styled.HeroInner>
    </div>
  ) : null;
}

interface Props {
  data?: ArticleHeroFragment$key | null;
}

type ContributionNode = ArticleHeroFragment$data["contributions"]["edges"][number];

const fragment = graphql`
  fragment ArticleHeroFragment on Item {
    title
    summary
    doi
    published {
      ...PrecisionDateFragment
    }
    contributions {
      edges {
        node {
          contributor {
            ...ContributorNameFragment
          }
        }
      }
    }
  }
`;
