"use client";

import { useMemo } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import get from "lodash/get";
import { ExternalLink, Markdown, ORCIDLink } from "components/atomic";
import { BackToTopBlock } from "components/layout";
import ContributionSummary from "components/composed/contribution/ContributionSummary";
import { ContributorDetailFragment$key } from "@/relay/ContributorDetailFragment.graphql";
import ContributorName from "../ContributorName";
import ContributorAvatar from "../ContributorAvatar";
import * as Styled from "./ContributorDetail.styles";

export default function ContributorDetail({ data }: Props) {
  const contributor = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  const contributionCount = useMemo(
    () =>
      get(contributor, "collectionContributions.nodes", []).length +
      get(contributor, "itemContributions.nodes", []).length,
    [contributor],
  );

  const hasLinks = useMemo(
    () => contributor && contributor.links && contributor.links.length > 0,
    [contributor],
  );

  return contributor ? (
    <>
      <section className="a-bg-custom10">
        <Styled.ContributorWrapper className="l-container-wide">
          <Styled.NameHeader as="header">
            {contributor.image?.storage && (
              <ContributorAvatar data={contributor.image} />
            )}
            <h3>
              <ContributorName data={contributor} />
            </h3>
          </Styled.NameHeader>
          {contributor.title && (
            <p className="t-label-lg">{contributor.title}</p>
          )}
          {contributor.affiliation && (
            <p className="t-copy-lighter">{contributor.affiliation}</p>
          )}
          {contributor.bio && (
            <div className="t-copy-light t-rte">
              <Markdown.Base>{contributor.bio}</Markdown.Base>
            </div>
          )}
          {(hasLinks || contributor.orcid) && (
            <ul className="t-label-sm">
              {contributor.orcid && (
                <Styled.BioLinkItem>
                  <ORCIDLink href={contributor.orcid}>
                    {contributor.orcid}
                  </ORCIDLink>
                </Styled.BioLinkItem>
              )}
              {hasLinks &&
                contributor.links.map(({ title, url }, i) => (
                  <Styled.BioLinkItem key={i}>
                    <ExternalLink href={url}>{title}</ExternalLink>
                  </Styled.BioLinkItem>
                ))}
            </ul>
          )}
        </Styled.ContributorWrapper>
      </section>
      {contributionCount > 0 && (
        <section className="l-container-wide">
          <Styled.ContributionsWrapper
            as={contributionCount > 6 ? BackToTopBlock : "div"}
          >
            <Styled.ContributionsHeader>
              {t("layouts.contributions_header")}
            </Styled.ContributionsHeader>
            <Styled.ContributionList>
              {contributor.collectionContributions.nodes.map((node, i) => (
                <Styled.ContributionItem key={i}>
                  <ContributionSummary data={node} showReadMore />
                </Styled.ContributionItem>
              ))}
              {contributor.itemContributions.nodes.map((node, i) => (
                <Styled.ContributionItem key={i}>
                  <ContributionSummary data={node} showReadMore />
                </Styled.ContributionItem>
              ))}
            </Styled.ContributionList>
          </Styled.ContributionsWrapper>
        </section>
      )}
    </>
  ) : null;
}

interface Props {
  data?: ContributorDetailFragment$key | null;
  backRoute?: string;
  backLabel?: string;
}

const fragment = graphql`
  fragment ContributorDetailFragment on Contributor {
    ...ContributorNameFragment
    ... on Contributor {
      bio
      orcid
      collectionContributions {
        nodes {
          ...ContributionSummaryFragment
        }
      }
      itemContributions {
        nodes {
          ...ContributionSummaryFragment
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
