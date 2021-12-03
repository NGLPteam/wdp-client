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
          <Styled.TitleBlock>
            <Styled.Title>{journal.title}</Styled.Title>
            <Styled.Subtitle>Journal subtitle</Styled.Subtitle>
          </Styled.TitleBlock>
          <Styled.MetadataBlock>
            <Styled.ISSN className="t-label-sm">
              ISSN: <Styled.Number>0000-0000</Styled.Number>
            </Styled.ISSN>
          </Styled.MetadataBlock>
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
