import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import capitalize from "lodash/capitalize";
import ContributorName from "../../../contributor/ContributorName";
import ContributorAvatar from "../../../contributor/ContributorAvatar";
import * as Styled from "./ContributionBlockItem.styles";
import { ContributionBlockItemFragment$key } from "@/relay/ContributionBlockItemFragment.graphql";
import { NamedLink } from "components/atomic";

const ContributionBlockItem = ({ data, showAvatar }: Props) => {
  const contribution = useMaybeFragment(fragment, data);

  return contribution && contribution.contributor.slug ? (
    <Styled.ListItem>
      <Styled.ItemContent>
        {showAvatar && (
          <NamedLink
            route="contributor"
            routeParams={{
              slug: contribution.contributor.slug,
              ...(contribution.item?.slug && { item: contribution.item.slug }),
              ...(contribution.collection?.slug && {
                collection: contribution.collection.slug,
              }),
            }}
            passHref
          >
            <Styled.ItemAvatar>
              <ContributorAvatar data={contribution.contributor.image} />
            </Styled.ItemAvatar>
          </NamedLink>
        )}
        <div>
          <NamedLink
            route="contributor"
            routeParams={{
              slug: contribution.contributor.slug,
              ...(contribution.item?.slug && { item: contribution.item.slug }),
              ...(contribution.collection?.slug && {
                collection: contribution.collection.slug,
              }),
            }}
            passHref
          >
            <a>
              <strong>
                <ContributorName data={contribution.contributor} />
              </strong>
            </a>
          </NamedLink>
          <Styled.ItemMetadata className="t-copy-lighter t-copy-sm">
            {contribution.role && <p>{capitalize(contribution.role)}</p>}
            {(contribution.affiliation ||
              contribution.contributor.affiliation) && (
              <p>
                {contribution.contributor.affiliation ||
                  contribution.contributor.affiliation}
              </p>
            )}
            {contribution.contributor.orcid && (
              <Styled.ORCIDLink href={contribution.contributor.orcid}>
                {contribution.contributor.orcid}
              </Styled.ORCIDLink>
            )}
          </Styled.ItemMetadata>
        </div>
      </Styled.ItemContent>
    </Styled.ListItem>
  ) : null;
};

interface Props {
  data?: ContributionBlockItemFragment$key | null;
  showAvatar?: boolean;
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
        orcid
      }
      ...ContributorNameFragment
    }

    ... on ItemContribution {
      item {
        slug
      }
    }

    ... on CollectionContribution {
      collection {
        slug
      }
    }
  }
`;
