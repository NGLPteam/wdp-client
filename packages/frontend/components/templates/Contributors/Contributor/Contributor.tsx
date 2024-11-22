import { graphql, useFragment } from "react-relay";
import capitalize from "lodash/capitalize";
import { NamedLink } from "components/atomic";
import { ContributorBlockFragment$key } from "@/relay/ContributorBlockFragment.graphql";
import ContributorName from "@/components/composed/contributor/ContributorName";
import ContributorAvatar from "@/components/composed/contributor/ContributorAvatar";
import * as Styled from "./Contributor.styles";

export default function ContributorBlock({
  data,
}: {
  data?: ContributorBlockFragment$key | null;
}) {
  const contribution = useFragment(fragment, data);

  if (!contribution) return null;

  const { item, collection, contributor } = contribution;

  const entity = item ?? collection;

  const params = new URLSearchParams({
    ...(entity?.slug && {
      [entity.__typename.toLowerCase()]: entity.slug,
    }),
  });

  const href = contributor.slug
    ? `/contributors/${contributor.slug}?${params.toString()}`
    : "#";

  return (
    <Styled.ListItem>
      <Styled.ItemContent>
        <Styled.ItemAvatar>
          <ContributorAvatar data={contributor.image} />
        </Styled.ItemAvatar>
        <div>
          <NamedLink href={href} className="default-link-styles">
            <strong>
              <ContributorName data={contribution.contributor} />
            </strong>
          </NamedLink>
          <Styled.ItemMetadata className="t-copy-lighter t-copy-sm">
            {contribution.role && <p>{capitalize(contribution.role)}</p>}
            {(contribution.affiliation || contributor.affiliation) && (
              <p>{contribution.affiliation || contributor.affiliation}</p>
            )}
            {contributor.orcid && (
              <Styled.ORCIDLink href={contributor.orcid}>
                {contributor.orcid}
              </Styled.ORCIDLink>
            )}
          </Styled.ItemMetadata>
        </div>
      </Styled.ItemContent>
    </Styled.ListItem>
  );
}

const fragment = graphql`
  fragment ContributorBlockFragment on Contribution {
    affiliation
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
        __typename
        slug
      }
    }

    ... on CollectionContribution {
      collection {
        __typename
        slug
      }
    }
  }
`;
