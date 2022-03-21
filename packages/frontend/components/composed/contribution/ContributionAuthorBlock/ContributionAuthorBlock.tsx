import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import capitalize from "lodash/capitalize";
import * as Styled from "./ContributionAuthorBlock.styles";
import ContributorAvatar from "components/composed/contributor/ContributorAvatar";
import ContributorName from "components/composed/contributor/ContributorName";
import { DotList, Link, NamedLink, Markdown } from "components/atomic";
import { ContributionAuthorBlockFragment$key } from "@/relay/ContributionAuthorBlockFragment.graphql";

export default function ContributionAuthorBlock({ data }: Props) {
  const contribution = useMaybeFragment(fragment, data);

  const contributor = contribution?.contributor;

  const showAvatar = contributor?.image?.storage ?? null;

  const itemSlug = contribution?.item?.slug;

  const collectionSlug = contribution?.collection?.slug;

  return contribution && contributor && contributor.slug ? (
    <section className="a-bg-custom10">
      <Styled.Inner className="l-container-wide">
        {showAvatar && (
          <NamedLink
            route="contributor"
            routeParams={{
              slug: contributor.slug,
              // ...(contribution?.slug && {
              //   item: contribution?.slug,
              // }),
            }}
            passHref
          >
            {/* Users are used to images being links, but for a11y we want to only have one tabbable link per contributor  */}
            <Styled.AvatarWrapper as="a" aria-hidden="true" tabIndex={-1}>
              <ContributorAvatar data={contributor.image} />
            </Styled.AvatarWrapper>
          </NamedLink>
        )}
        <Styled.Info>
          <NamedLink
            route="contributor"
            routeParams={{
              slug: contributor.slug,
              ...(itemSlug && {
                item: itemSlug,
              }),
              ...(collectionSlug && {
                collection: collectionSlug,
              }),
            }}
            passHref
          >
            <Link>
              <ContributorName data={contributor} />
            </Link>
          </NamedLink>
          {contributor.__typename === "PersonContributor" && (
            <>
              <Styled.Roles>
                <DotList className="t-copy-sm t-copy-lighter">
                  {contribution.role && (
                    <li>{capitalize(contribution.role)}</li>
                  )}
                  {contributor.title && <li>{contributor.title}</li>}
                  {contributor.affiliation && (
                    <li>{contributor.affiliation}</li>
                  )}
                </DotList>
              </Styled.Roles>
              {contributor.bio && (
                <Styled.Bio>
                  <Markdown.Summary className="t-copy-sm t-copy-lighter t-rte">
                    {contributor.bio}
                  </Markdown.Summary>
                </Styled.Bio>
              )}
            </>
          )}
        </Styled.Info>
      </Styled.Inner>
    </section>
  ) : null;
}

type Props = {
  data?: ContributionAuthorBlockFragment$key | null;
};

const fragment = graphql`
  fragment ContributionAuthorBlockFragment on Contribution {
    affiliation
    role
    ... on CollectionContribution {
      collection {
        slug
      }
    }
    ... on ItemContribution {
      item {
        slug
      }
    }
    contributor {
      ... on Sluggable {
        slug
      }
      ... on PersonContributor {
        __typename
        title
        bio
        affiliation
        image {
          storage
          ...ContributorAvatarFragment
        }
        ...ContributorNameFragment
      }
      ... on OrganizationContributor {
        __typename
        bio
        image {
          storage
          ...ContributorAvatarFragment
        }
        ...ContributorNameFragment
      }
    }
  }
`;
