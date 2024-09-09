import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { getSchemaPluralName } from "helpers";
import { NamedLink, Image } from "components/atomic";
import Markdown from "components/atomic/Markdown";
import { InstanceCommunitySummaryFragment$key } from "@/relay/InstanceCommunitySummaryFragment.graphql";
import * as Styled from "./InstanceCommunitySummary.styles";

export default function InstanceCommunitySummary({ data }: Props) {
  const community = useFragment(fragment, data);

  const { t } = useTranslation();

  return community && community.slug ? (
    <NamedLink href={`/communities/${community.slug}`}>
      <Styled.LinkWrapper className="a-bg-neutral00">
        {community.logo?.storage ? (
          <Styled.ImageWrapper $withPadding>
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
            <Styled.Summary
              as={Markdown.Summary}
              className="t-color-light t-copy-sm"
            >
              {community.summary}
            </Styled.Summary>
          )}
          {community.schemaRanks && (
            <Styled.CountList>
              {community.schemaRanks.map(({ slug, count, name }) => {
                return (
                  <Styled.CountItem key={slug}>
                    <span>
                      {count > 1 ? getSchemaPluralName(slug, name, t) : name}
                    </span>{" "}
                    <span>{new Intl.NumberFormat().format(count)}</span>
                  </Styled.CountItem>
                );
              })}
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
