import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleContributor.styles";
import ContributorAvatar from "components/composed/contributor/ContributorAvatar";
import ContributorName from "components/composed/contributor/ContributorName";
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

  return contributor &&
    (contributor.__typename === "PersonContributor" ||
      contributor.__typename === "OrganizationContributor") ? (
    <section className="a-bg-custom10">
      <div className="l-container-wide">
        <Styled.Inner>
          <Styled.AvatarWrapper>
            <ContributorAvatar data={contributor.image} />
          </Styled.AvatarWrapper>
          <Styled.Info>
            <ContributorName data={contributor} />
            {contributor.__typename === "PersonContributor" && (
              <>
                <Styled.Roles>
                  <span className="t-copy-sm t-copy-lighter">
                    {contributionToShow.role && (
                      <Styled.Role>{contributionToShow.role}</Styled.Role>
                    )}
                    {contributor.title && (
                      <Styled.Role>{contributor.title}</Styled.Role>
                    )}
                    {contributor.affiliation && (
                      <Styled.Role>{contributor.affiliation}</Styled.Role>
                    )}
                  </span>
                </Styled.Roles>
                <Styled.Bio className="t-copy-sm t-copy-lighter">
                  {contributor.bio}
                </Styled.Bio>
              </>
            )}
          </Styled.Info>
        </Styled.Inner>
      </div>
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
        contributor {
          ... on PersonContributor {
            __typename
            title
            bio
            affiliation
            image {
              ...ContributorAvatarFragment
            }
            ...ContributorNameFragment
          }
          ... on OrganizationContributor {
            __typename
            bio
            image {
              ...ContributorAvatarFragment
            }
            ...ContributorNameFragment
          }
        }
      }
    }
  }
`;
