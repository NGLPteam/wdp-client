import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorName from "../../../contributor/ContributorName";
import ContributorAvatar from "../../../contributor/ContributorAvatar";
import * as Styled from "./ContributionBlockItem.styles";
import { ContributionBlockItemFragment$key } from "@/relay/ContributionBlockItemFragment.graphql";

const ContributionBlockItem = ({ data }: Props) => {
  const contribution = useMaybeFragment(fragment, data);

  return contribution ? (
    <Styled.ListItem>
      <Styled.ItemAvatar>
        <ContributorAvatar data={contribution.contributor.image} />
      </Styled.ItemAvatar>
      <div>
        <strong>
          <ContributorName data={contribution.contributor} />
        </strong>
        <Styled.ItemMetadata className="t-copy-lighter t-copy-sm">
          {contribution.role && <p>{contribution.role}</p>}
          {contribution.affiliation && (
            <p>
              {contribution.affiliation || contribution.contributor.affiliation}
            </p>
          )}
        </Styled.ItemMetadata>
      </div>
    </Styled.ListItem>
  ) : null;
};

interface Props {
  data?: ContributionBlockItemFragment$key | null;
}

export default ContributionBlockItem;

const fragment = graphql`
  fragment ContributionBlockItemFragment on Contribution {
    affiliation
    displayName
    contributorKind
    role
    contributor {
      ...ContributorNameFragment
      ... on PersonContributor {
        image {
          ...ContributorAvatarFragment
        }
        affiliation
      }
      ... on OrganizationContributor {
        image {
          ...ContributorAvatarFragment
        }
      }
    }
  }
`;
