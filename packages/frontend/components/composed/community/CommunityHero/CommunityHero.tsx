import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./CommunityHero.styles";
import { CommunityHeroFragment$key } from "@/relay/CommunityHeroFragment.graphql";
import SearchHero from "components/composed/search/SearchHero";

export default function CommunityHero({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  if (!community) return null;

  const tagline =
    community.tagline || t("common.welcome_to", { name: community.title });

  return (
    <div
      className={
        community.heroImage?.storage &&
        community.heroImageLayout === "ONE_COLUMN"
          ? "a-bg-neutral90"
          : community.heroImage?.storage
          ? "a-bg-custom20"
          : "a-bg-custom10"
      }
    >
      <Styled.Hero
        data-hero-image={!!community.heroImage?.storage}
        data-hero-layout={community.heroImageLayout}
      >
        <Styled.HeroInner>
          <h1>{tagline}</h1>
          {community.summary && (
            <Styled.Summary>
              <ReactMarkdown
                components={{
                  h1: "p",
                  h2: "p",
                  h3: "p",
                  h4: "p",
                  h5: "p",
                }}
              >
                {community.summary}
              </ReactMarkdown>
            </Styled.Summary>
          )}
        </Styled.HeroInner>
        {community.heroImage?.storage && community.heroImage.original.url && (
          <Styled.ImageWrapper>
            <Styled.Image
              alt={community.heroImage.original.alt || ""}
              src={community.heroImage.original.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Styled.ImageWrapper>
        )}
      </Styled.Hero>
      <SearchHero />
    </div>
  );
}

interface Props {
  data?: CommunityHeroFragment$key | null;
}

const fragment = graphql`
  fragment CommunityHeroFragment on Community {
    title
    tagline
    summary
    heroImage {
      storage
      original {
        alt
        url
        width
        height
      }
    }
    heroImageLayout
  }
`;
