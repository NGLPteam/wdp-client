import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import capitalize from "lodash/capitalize";
import { NamedLink } from "components/atomic";
import { ContributionBlockItemFragment$key } from "@/relay/ContributionBlockItemFragment.graphql";
import ContributorName from "../../../contributor/ContributorName";
import ContributorAvatar from "../../../contributor/ContributorAvatar";
import * as Styled from "./ContributionBlockItem.styles";

const ContributionBlockItem = ({ data, showAvatar }: Props) => {
  const contribution = useMaybeFragment(fragment, data);

  if (!contribution) return null;

  const params = new URLSearchParams({
    ...(contribution.item?.slug && { item: contribution.item.slug }),
    ...(contribution.collection?.slug && {
      collection: contribution.collection.slug,
    }),
  });
  const href = contribution.contributor.slug
    ? `/contributors/${contribution.contributor.slug}?${params.toString()}`
    : "#";

  return (
    <Styled.ListItem>
      <Styled.ItemContent>
        {showAvatar && (
          <NamedLink href={href}>
            <Styled.ItemAvatar>
              <ContributorAvatar data={contribution.contributor.image} />
            </Styled.ItemAvatar>
          </NamedLink>
        )}
        <div>
          <NamedLink href={href} className="default-link-styles">
            <strong>
              <ContributorName data={contribution.contributor} />
            </strong>
          </NamedLink>
          <Styled.ItemMetadata className="t-copy-lighter t-copy-sm">
            {contribution.role && <p>{capitalize(contribution.role)}</p>}
            {(contribution.affiliation ||
              contribution.contributor.affiliation) && (
              <p>
                {contribution.affiliation ||
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
  );
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
