import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import ContributorName from "../../../contributor/ContributorName";
import ContributorAvatar from "../../../contributor/ContributorAvatar";
import * as Styled from "./ContributionBlockItem.styles";
import { ContributionBlockItemFragment$key } from "@/relay/ContributionBlockItemFragment.graphql";
import { NamedLink } from "components/atomic";

const ContributionBlockItem = ({ data, route, showAvatar }: Props) => {
  const contribution = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();

  return contribution && slug && contribution.contributor.slug ? (
    <Styled.ListItem>
      <NamedLink
        route={route}
        routeParams={{ slug, contributor: contribution.contributor.slug }}
        passHref
      >
        <Styled.ItemLink>
          {showAvatar && (
            <Styled.ItemAvatar>
              <ContributorAvatar data={contribution.contributor.image} />
            </Styled.ItemAvatar>
          )}
          <div>
            <strong>
              <ContributorName data={contribution.contributor} />
            </strong>
            <Styled.ItemMetadata className="t-copy-lighter t-copy-sm">
              {contribution.role && <p>{contribution.role}</p>}
              {contribution.affiliation && (
                <p>
                  {contribution.affiliation ||
                    contribution.contributor.affiliation}
                </p>
              )}
            </Styled.ItemMetadata>
          </div>
        </Styled.ItemLink>
      </NamedLink>
    </Styled.ListItem>
  ) : null;
};

interface Props {
  data?: ContributionBlockItemFragment$key | null;
  showAvatar?: boolean;
  route: string;
}

export default ContributionBlockItem;

const fragment = graphql`
  fragment ContributionBlockItemFragment on Contribution {
    affiliation
    displayName
    contributorKind
    role
    contributor {
      ... on Sluggable {
        slug
      }
      ... on Contributor {
        image {
          ...ContributorAvatarFragment
        }
      }
      ... on PersonContributor {
        affiliation
      }
      ...ContributorNameFragment
    }
  }
`;
