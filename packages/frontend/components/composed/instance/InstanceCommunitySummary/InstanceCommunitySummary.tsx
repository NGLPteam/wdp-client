import React from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./InstanceCommunitySummary.styles";
import { getSchemaTranslationKey } from "helpers";
import { NamedLink, Image } from "components/atomic";
import { InstanceCommunitySummaryFragment$key } from "@/relay/InstanceCommunitySummaryFragment.graphql";

export default function InstanceCommunitySummary({ data }: Props) {
  const community = useFragment(fragment, data);

  const { t } = useTranslation();

  return community && community.slug ? (
    <NamedLink
      route="community"
      routeParams={{ slug: community.slug }}
      passHref
    >
      <Styled.LinkWrapper className="a-bg-neutral00">
        {community.logo?.storage ? (
          <Styled.ImageWrapper>
            <Styled.LogoWrapper>
              <Image
                data={community.logo.original}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </Styled.LogoWrapper>
          </Styled.ImageWrapper>
        ) : community.heroImage?.storage ? (
          <Styled.ImageWrapper>
            <Image
              data={community.heroImage.large?.webp}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Styled.ImageWrapper>
        ) : null}
        <Styled.TextWrapper className="a-bg-custom10">
          <h4>{community.title}</h4>
          {community.tagline && (
            <Styled.Tagline>{community.tagline}</Styled.Tagline>
          )}
          {community.summary && (
            <Styled.Summary className="t-color-light t-copy-sm">
              {community.summary}
            </Styled.Summary>
          )}
          {community.schemaRanks && (
            <Styled.CountList>
              {community.schemaRanks.map(({ slug, count }) => (
                <Styled.CountItem key={slug}>
                  <span>{t(getSchemaTranslationKey(slug), { count: 2 })}</span>{" "}
                  <span>{new Intl.NumberFormat().format(count)}</span>
                </Styled.CountItem>
              ))}
            </Styled.CountList>
          )}
        </Styled.TextWrapper>
      </Styled.LinkWrapper>
    </NamedLink>
  ) : null;
}

type Props = {
  data: InstanceCommunitySummaryFragment$key;
};

const fragment = graphql`
  fragment InstanceCommunitySummaryFragment on Community {
    slug
    title
    tagline
    summary
    schemaRanks {
      slug
      name
      count
    }
    heroImage {
      storage
      large {
        webp {
          ...ImageFragment
        }
      }
    }
    logo {
      storage
      original {
        ...ImageFragment
      }
    }
  }
`;
