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
          <Styled.Title>Parent Journal</Styled.Title>
          <Styled.JournalMeta className="l-flex">
            <div>Journal subtitle goes here</div>
            <div className="t-label-sm">
              ISSN: <Styled.Number>0000-0000</Styled.Number>
            </div>
          </Styled.JournalMeta>
          <Styled.IssueWrapper className="l-flex">
            <CoverImage data={issue.thumbnail} maxWidth={225} maxHeight={300} />
            <Styled.IssueMeta className="l-flex">
              <Styled.Issue>
                {issue.title}
                <Styled.Volume>Volume X</Styled.Volume>
              </Styled.Issue>
              {issue.summary && (
                <Styled.Description>{issue.summary}</Styled.Description>
              )}
              <div className="t-label-sm">
                ISSN: <Styled.Number>0000-0000</Styled.Number>
              </div>
              <Styled.DOI className="t-label-sm">
                DOI: <Styled.Number>http://dx.doi.org/XXXX/XXXX</Styled.Number>
              </Styled.DOI>
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
    thumbnail {
      ...CoverImageFragment
    }
    # TODO: How do we get the issue's parent journal?
  }
`;
