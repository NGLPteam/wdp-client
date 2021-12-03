import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./IssueHero.styles";
import { IssueHeroFragment$key } from "@/relay/IssueHeroFragment.graphql";
import CoverImage from "components/atomic/CoverImage";

export default function IssueHero({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  return issue ? (
    <header>
      <div className="a-bg-custom10">
        <Styled.HeroInner className="l-container-wide">
          {issue.journal && (
            <>
              <Styled.Title>{issue.journal.title}</Styled.Title>
              <Styled.JournalMeta className="l-flex">
                <div>Journal subtitle goes here</div>
              </Styled.JournalMeta>
            </>
          )}
          <Styled.IssueWrapper className="l-flex">
            <CoverImage data={issue.thumbnail} maxWidth={225} maxHeight={300} />
            <Styled.IssueMeta>
              <Styled.Issue className="l-flex">
                {issue.title}
                {issue.volume && (
                  <Styled.Volume>{issue.volume.title}</Styled.Volume>
                )}
              </Styled.Issue>
              {issue.summary && (
                <Styled.Description>{issue.summary}</Styled.Description>
              )}
              {issue.doi && (
                <Styled.DOI className="t-label-sm">
                  DOI: <Styled.Number>{issue.doi}</Styled.Number>
                </Styled.DOI>
              )}
            </Styled.IssueMeta>
          </Styled.IssueWrapper>
        </Styled.HeroInner>
      </div>
    </header>
  ) : null;
}

interface Props {
  data?: IssueHeroFragment$key | null;
}

const fragment = graphql`
  fragment IssueHeroFragment on Collection {
    title
    summary
    doi
    thumbnail {
      ...CoverImageFragment
    }
    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Collection {
        title
      }
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Collection {
        title
      }
    }
  }
`;
