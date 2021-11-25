import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./JournalHero.styles";
import { HeroImage } from "components/atomic";
import { JournalHeroFragment$key } from "@/relay/JournalHeroFragment.graphql";

export default function JournalHero({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <>
      <header className="a-bg-custom10">
        <Styled.HeroInner className="l-container-wide">
          <h2>{journal.title}</h2>
          <div className="t-label-sm">ISSN</div>
        </Styled.HeroInner>
      </header>
      <HeroImage data={journal.thumbnail} />
    </>
  ) : null;
}

interface Props {
  data?: JournalHeroFragment$key | null;
}

const fragment = graphql`
  fragment JournalHeroFragment on Collection {
    title
    thumbnail {
      ...HeroImageFragment
    }
  }
`;
