import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import {
  HeroImage,
  ContentImage,
  PrecisionDate,
  Markdown,
} from "components/atomic";
import { EntityHeroFragment$key } from "@/relay/EntityHeroFragment.graphql";
import { PrimaryHero } from "components/layout/hero";

export default function EntityHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <PrimaryHero
      title={<Markdown.Title>{entity.title}</Markdown.Title>}
      subtitle={<Markdown.Title>{entity.subtitle}</Markdown.Title>}
      LeftComponent={
        <>
          {entity.published?.value && (
            <PrecisionDate data={entity.published} label="common.published" />
          )}
          {(entity.about?.content || entity.summary) && (
            <Markdown.Summary className="t-rte">
              {entity.about?.content || entity.summary || ""}
            </Markdown.Summary>
          )}
        </>
      }
      RightComponent={
        entity.thumbnail?.storage && <ContentImage data={entity.thumbnail} />
      }
      HeroImageComponent={
        entity.heroImage?.storage && (
          <HeroImage
            data={entity.heroImage}
            metadata={entity.heroImageMetadata}
          />
        )
      }
    />
  ) : null;
}

interface Props {
  data?: EntityHeroFragment$key | null;
}

const fragment = graphql`
  fragment EntityHeroFragment on AnyEntity {
    ... on Entity {
      title
      subtitle
      summary

      thumbnail {
        storage
        ...ContentImageFragment
      }

      heroImage {
        storage
        ...HeroImageFragment
      }

      heroImageMetadata {
        ...HeroImageMetadataFragment
      }
    }

    ... on Collection {
      published {
        ...PrecisionDateFragment
        value
      }

      about: schemaProperty(fullPath: "about") {
        ... on MarkdownProperty {
          content
        }
      }
    }

    ... on Item {
      published {
        ...PrecisionDateFragment
        value
      }

      about: schemaProperty(fullPath: "about") {
        ... on MarkdownProperty {
          content
        }
      }
    }
  }
`;
