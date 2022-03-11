import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./VolumeHero.styles";
import { VolumeHeroFragment$key } from "@/relay/VolumeHeroFragment.graphql";
import { DotList, PrecisionDate, DOI, CoverImage } from "components/atomic";
import JournalHeroCompact from "components/composed/journal/JournalHeroCompact";
import JournalHeroMetadata from "components/composed/journal/JournalHeroMetadata";

export default function VolumeHero({ data }: Props) {
  const volume = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return volume ? (
    <header className="a-bg-custom10">
      <JournalHeroCompact data={volume.journal} />
      <Styled.HeroInner className="l-container-wide">
        <Styled.TextBlock>
          <Styled.Cover>
            <CoverImage
              id={volume.id}
              title={volume.title}
              data={volume.thumbnail}
              maxWidth={225}
              maxHeight={300}
            />
          </Styled.Cover>
          <Styled.Issue>
            <Styled.Title as="h3">{volume.title}</Styled.Title>
            <Styled.Description>
              <DotList className="t-copy-lighter">
                {volume.published.value && (
                  <li>
                    <PrecisionDate data={volume.published} />
                  </li>
                )}
              </DotList>
              {volume.summary && <p>{volume.summary}</p>}
            </Styled.Description>
          </Styled.Issue>
        </Styled.TextBlock>
        <Styled.MetadataBlock className="t-label-sm">
          <DOI data={volume} />
          <JournalHeroMetadata data={volume.journal} />
        </Styled.MetadataBlock>
      </Styled.HeroInner>
    </header>
  ) : null;
}

interface Props {
  data?: VolumeHeroFragment$key | null;
}

const fragment = graphql`
  fragment VolumeHeroFragment on Collection {
    id
    title
    subtitle
    summary
    ...DOIFragment

    published {
      value
      ...PrecisionDateFragment
    }

    thumbnail {
      ...CoverImageFragment
    }

    journal: ancestorOfType(schema: "nglp:journal") {
      ...JournalHeroCompactFragment
      ...JournalHeroMetadataFragment
    }
  }
`;
