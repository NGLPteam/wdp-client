import React from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { HeroImage, ContentImage, PrecisionDate } from "components/atomic";
import { EntityHeroFragment$key } from "@/relay/EntityHeroFragment.graphql";
import { PrimaryHero } from "components/layout/hero";

export default function EntityHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <PrimaryHero
      title={entity.title}
      subtitle={entity.subtitle}
      LeftComponent={
        <>
          {entity.published?.value && (
            <PrecisionDate data={entity.published} label="common.published" />
          )}
          {entity.summary && (
            <ReactMarkdown
              className="t-rte"
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: "h4",
                h2: "h4",
                h3: "h4",
                h4: "h4",
              }}
            >
              {entity.summary}
            </ReactMarkdown>
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
    }

    ... on Item {
      published {
        ...PrecisionDateFragment
        value
      }
    }
  }
`;
