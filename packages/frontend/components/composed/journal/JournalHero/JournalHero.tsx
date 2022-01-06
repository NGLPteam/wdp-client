import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./JournalHero.styles";
import { HeroImage, NamedLink } from "components/atomic";
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
          <Styled.MetadataBlock>
            {journal.issn && (
              <Styled.ISSN className="t-label-sm">
                ISSN: <Styled.Number>{journal.issn}</Styled.Number>
              </Styled.ISSN>
            )}
            {journal.doi && (
              <div className="t-label-sm">
                DOI: <Styled.DOI>{journal.doi}</Styled.DOI>
              </div>
            )}
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
    issn
    doi
    heroImage {
      storage
      ...HeroImageFragment
    }
  }
`;
