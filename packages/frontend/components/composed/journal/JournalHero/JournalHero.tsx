import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import JournalHeroMetadata from "../JournalHeroMetadata";
import { HeroImage, DOI, NamedLink, Markdown } from "components/atomic";
import { PrimaryHero } from "components/layout/hero";
import { JournalHeroFragment$key } from "@/relay/JournalHeroFragment.graphql";

export default function JournalHero({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <PrimaryHero
      title={
        <NamedLink
          route="collection"
          routeParams={{ slug: journal.slug || "" }}
        >
          <Markdown.Title>{journal.title}</Markdown.Title>
        </NamedLink>
      }
      subtitle={<Markdown.Title>{journal.subtitle}</Markdown.Title>}
      RightComponent={
        <>
          <DOI data={journal} />
          <JournalHeroMetadata data={journal} />
        </>
      }
      HeroImageComponent={
        journal.heroImage?.storage && (
          <HeroImage
            data={journal.heroImage}
            metadata={journal.heroImageMetadata}
          />
        )
      }
    />
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
    heroImageMetadata {
      ...HeroImageMetadataFragment
    }
    ...DOIFragment
    ...JournalHeroMetadataFragment
  }
`;
