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
          <CoverImage data={issue.thumbnail} maxWidth={225} />
          <h3>{issue.title}</h3>
          {issue.summary && <p>{issue.summary}</p>}
          <div className="t-label-sm">ISSN</div>
          <div className="t-label-sm">DOI</div>
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
