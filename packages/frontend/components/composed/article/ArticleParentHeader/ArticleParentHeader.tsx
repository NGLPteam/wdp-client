import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleParentHeader.styles";
import { ArticleParentHeaderFragment$key } from "@/relay/ArticleParentHeaderFragment.graphql";

export default function ArticleParentHeader({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  return article ? (
    <div className="a-bg-custom10">
      <Styled.ParentBlock className="l-container-wide">
        <Styled.JournalBlock>
          {(article.journal || article.unit) && (
            <>
              <p className="t-h3">
                {article.journal?.title || article.unit?.title}
              </p>
            </>
          )}
        </Styled.JournalBlock>
        {article.issue ? (
          <Styled.IssueBlock>
            {article.issue && <p>{article.issue.title}</p>}
            {article.volume && (
              <p className="t-copy-lighter">{article.volume.title}</p>
            )}
          </Styled.IssueBlock>
        ) : (
          article.campus && (
            <Styled.IssueBlock>
              <p>{article.campus.title}</p>
            </Styled.IssueBlock>
          )
        )}
      </Styled.ParentBlock>
    </div>
  ) : null;
}

interface Props {
  data?: ArticleParentHeaderFragment$key | null;
}

const fragment = graphql`
  fragment ArticleParentHeaderFragment on Item {
    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Entity {
        title
      }
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Entity {
        title
      }
    }
    issue: ancestorOfType(schema: "nglp:journal_issue") {
      ... on Entity {
        title
      }
    }
    unit: ancestorOfType(schema: "nglp:unit") {
      ... on Entity {
        title
      }
    }
    campus: ancestorOfType(schema: "nglp:campus") {
      ... on Entity {
        title
      }
    }
  }
`;
