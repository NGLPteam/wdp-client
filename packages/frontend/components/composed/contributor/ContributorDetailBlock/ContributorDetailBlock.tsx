import React from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import ContributorName from "../ContributorName";
import ContributorAvatar from "../ContributorAvatar";
import * as Styled from "./ContributorDetailBlock.styles";
import ContributionItem from "./ContributionItem/ContributionItem";
import { BackButton, ExternalLink, NamedLink } from "components/atomic";
import { ContributorDetailBlockFragment$key } from "@/relay/ContributorDetailBlockFragment.graphql";

export default function ContributorDetailBlock({ data }: Props) {
  const contributor = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return contributor ? (
    <div className="l-container-wide">
      {slug && (
        <Styled.BackNav>
          <NamedLink route="item.contributors" routeParams={{ slug }} passHref>
            <BackButton>Back to Contributors</BackButton>
          </NamedLink>
        </Styled.BackNav>
      )}
      <Styled.Section>
        {contributor.image.storage && (
          <ContributorAvatar data={contributor.image} />
        )}
        <h3>
          <ContributorName data={contributor} />
        </h3>
        {contributor.title && <p className="t-label-lg">{contributor.title}</p>}
        {contributor.affiliation && (
          <p className="t-copy-lighter">{contributor.affiliation}</p>
        )}
        {contributor.bio && (
          <div className="t-copy-light">
            <ReactMarkdown>{contributor.bio}</ReactMarkdown>
          </div>
        )}
        {contributor.links && contributor.links.length > 0 && (
          <ul className="t-label-sm">
            {contributor.links.map(({ title, url }, i) => (
              <li key={i}>
                <ExternalLink href={url}>{title}</ExternalLink>
              </li>
            ))}
          </ul>
        )}
      </Styled.Section>
      {(contributor.collectionContributionCount > 0 ||
        contributor.itemContributionCount > 0) && (
        <Styled.ContributionsSection>
          <h3>{t("layouts.contributions_header")}</h3>
          <Styled.ContributionList>
            {contributor.collectionContributions.nodes.map(
              ({ collection }, i) => (
                <Styled.ContributionItem key={i}>
                  <ContributionItem data={collection} />
                </Styled.ContributionItem>
              )
            )}
            {contributor.itemContributions.nodes.map(({ item }, i) => (
              <Styled.ContributionItem key={i}>
                <ContributionItem data={item} />
              </Styled.ContributionItem>
            ))}
          </Styled.ContributionList>
        </Styled.ContributionsSection>
      )}
    </div>
  ) : null;
}

interface Props {
  data?: ContributorDetailBlockFragment$key | null;
}

const fragment = graphql`
  fragment ContributorDetailBlockFragment on Contributor {
    ...ContributorNameFragment
    ... on Contributor {
      bio
      collectionContributionCount
      collectionContributions {
        nodes {
          role
          collection {
            ...ContributionItemFragment
          }
        }
      }
      itemContributionCount
      itemContributions {
        nodes {
          role
          item {
            ...ContributionItemFragment
          }
        }
      }
      image {
        storage
        ...ContributorAvatarFragment
      }
      links {
        title
        url
      }
    }
    ... on PersonContributor {
      affiliation
      title
    }
  }
`;
