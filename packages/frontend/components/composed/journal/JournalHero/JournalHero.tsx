import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import JournalHeroMetadata from "../JournalHeroMetadata";
import * as Styled from "./JournalHero.styles";
import { HeroImage, NamedLink, DOI } from "components/atomic";
import { JournalHeroFragment$key } from "@/relay/JournalHeroFragment.graphql";

export default function JournalHero({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <>
      <header className="a-bg-custom10">
        <Styled.HeroInner className="l-container-wide">
          <Styled.TitleBlock>
            <Styled.Title>
              <NamedLink
                route="collection"
                routeParams={{ slug: journal.slug }}
                passHref
              >
                <a>{journal.title}</a>
              </NamedLink>
            </Styled.Title>
            {journal.subtitle && (
              <Styled.Subtitle>{journal.subtitle}</Styled.Subtitle>
            )}
          </Styled.TitleBlock>
          <Styled.MetadataBlock className="t-label-sm">
            <DOI data={journal} />
            <JournalHeroMetadata data={journal} />
          </Styled.MetadataBlock>
        </Styled.HeroInner>
      </header>
      {journal.heroImage?.storage && <HeroImage data={journal.heroImage} />}
    </>
  ) : null;
}

interface Props {
  data?: JournalHeroFragment$key | null;
}

const fragment = graphql`
  fragment JournalHeroFragment on Collection {
    slug
    title
    subtitle
    heroImage {
      storage
      ...HeroImageFragment
    }
    ...DOIFragment
    ...JournalHeroMetadataFragment
  }
`;
