import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ReactMarkdown from "react-markdown";
import * as Styled from "./ArticleContributor.styles";
import ContributorAvatar from "components/composed/contributor/ContributorAvatar";
import ContributorName from "components/composed/contributor/ContributorName";
import { DotList, NamedLink } from "components/atomic";
import { ArticleContributorFragment$key } from "@/relay/ArticleContributorFragment.graphql";

export default function ArticleContributor({ data }: Props) {
  const contributions = useMaybeFragment(fragment, data);
  const authorContributions = contributions?.edges.filter(
    (edge) => edge.node.role?.toLowerCase() === "author"
  );
  const contributionToShow = authorContributions?.length
    ? authorContributions[0].node
    : null;
  const contributor = contributionToShow?.contributor;
  const showAvatar = contributor?.image?.storage ?? null;

  return contributor &&
    (contributor.__typename === "PersonContributor" ||
      contributor.__typename === "OrganizationContributor") &&
    contributor.slug ? (
    <section className="a-bg-custom10">
      <Styled.Inner className="l-container-wide">
        {showAvatar && (
          <NamedLink
            route="contributor"
            routeParams={{
              slug: contributor.slug,
              ...(contributionToShow?.item?.slug && {
                item: contributionToShow.item?.slug,
              }),
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
              ...(contributionToShow?.item?.slug && {
                item: contributionToShow.item?.slug,
              }),
            }}
            passHref
          >
            <a>
              <ContributorName data={contributor} />
            </a>
          </NamedLink>
          {contributor.__typename === "PersonContributor" && (
            <>
              <Styled.Roles>
                <DotList className="t-copy-sm t-copy-lighter">
                  {contributionToShow.role && (
                    <li className="t-capitalize">{contributionToShow.role}</li>
                  )}
                  {contributor.title && <li>{contributor.title}</li>}
                  {contributor.affiliation && (
                    <li>{contributor.affiliation}</li>
                  )}
                </DotList>
              </Styled.Roles>
              {contributor.bio && (
                <Styled.Bio>
                  <ReactMarkdown
                    className="t-copy-sm t-copy-lighter"
                    components={{
                      h1: "p",
                      h2: "p",
                      h3: "p",
                      h4: "p",
                      h5: "p",
                    }}
                  >
                    {contributor.bio}
                  </ReactMarkdown>
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
  data?: ArticleContributorFragment$key | null;
};

const fragment = graphql`
  fragment ArticleContributorFragment on ItemContributionConnection {
    edges {
      node {
        affiliation
        role
        item {
          slug
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
    }
  }
`;
