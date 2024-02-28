import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import {
  DotList,
  PrecisionDate,
  DOI,
  CoverImage,
  Alert,
} from "components/atomic";
import JournalHeroCompact from "components/composed/journal/JournalHeroCompact";
import JournalHeroMetadata from "components/composed/journal/JournalHeroMetadata";
import { VolumeHeroFragment$key } from "@/relay/VolumeHeroFragment.graphql";
import * as Styled from "./VolumeHero.styles";

export default function VolumeHero({ data }: Props) {
  const volume = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const visibilityMessage =
    volume?.visibility === "HIDDEN" || volume?.currentlyHidden
      ? t("messages.hidden", { schema: t("schema.nglp.journal_volume") })
      : null;

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
            {visibilityMessage && (
              <Alert message={visibilityMessage} color="blue" badge />
            )}
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
    visibility
    currentlyHidden

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
