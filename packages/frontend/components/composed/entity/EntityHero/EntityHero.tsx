import React from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./EntityHero.styles";
import { HeroImage, ContentImage, PrecisionDate } from "components/atomic";
import { EntityHeroFragment$key } from "@/relay/EntityHeroFragment.graphql";

export default function EntityHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return entity ? (
    <section className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <Styled.LeftSide>
          <Styled.TitleBlock>
            <h2>{entity.title}</h2>
            {entity.subtitle && (
              <h4 className="t-copy-italic">{entity.subtitle}</h4>
            )}
          </Styled.TitleBlock>
          {entity.published?.value && (
            <Styled.DataBlock className="t-copy-lighter">
              <PrecisionDate data={entity.published} label="common.published" />
            </Styled.DataBlock>
          )}
          {entity.about && (
            <Styled.Summary aria-label={t("glossary.abstract")}>
              <ReactMarkdown className="t-rte">
                {entity.about.content}
              </ReactMarkdown>
            </Styled.Summary>
          )}
        </Styled.LeftSide>
        <Styled.RightSide className="t-label-sm">
          {entity.thumbnail.storage && (
            <Styled.ImageWrapper>
              <ContentImage data={entity.thumbnail} />
            </Styled.ImageWrapper>
          )}
        </Styled.RightSide>
      </Styled.HeroInner>
      {entity.heroImage?.storage && (
        <HeroImage
          data={entity.heroImage}
          metadata={entity.heroImageMetadata}
        />
      )}
    </section>
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
      about: schemaProperty(fullPath: "about") {
        ... on MarkdownProperty {
          content
        }
      }

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
