import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import JournalHeroMetadata from "../JournalHeroMetadata";
import { HeroImage, DOI, NamedLink, Markdown, Alert } from "components/atomic";
import { PrimaryHero } from "components/layout/hero";
import { JournalHeroFragment$key } from "@/relay/JournalHeroFragment.graphql";

export default function JournalHero({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const visibilityMessage =
    journal?.visibility === "HIDDEN" || journal?.currentlyHidden
      ? t("messages.hidden", { schema: t("schema.nglp.journal") })
      : null;

  return journal ? (
    <PrimaryHero
      Alert={
        visibilityMessage && (
          <Alert message={visibilityMessage} badge color="blue" />
        )
      }
      title={
        <NamedLink
          route="collection"
          routeParams={{ slug: journal.slug || "" }}
          passHref
        >
          <a>
            <Markdown.Title>{journal.title}</Markdown.Title>
          </a>
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
    visibility
    currentlyHidden
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
