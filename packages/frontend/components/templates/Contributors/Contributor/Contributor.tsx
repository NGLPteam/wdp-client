import { graphql, useFragment } from "react-relay";
import capitalize from "lodash/capitalize";
import classNames from "classnames";
import { NamedLink } from "components/atomic";
import { ContributorBlockFragment$key } from "@/relay/ContributorBlockFragment.graphql";
import ContributorName from "@/components/composed/contributor/ContributorName";
import ContributorAvatar from "@/components/composed/contributor/ContributorAvatar";
import ORCIDLink from "@/components/atomic/links/Link/patterns/ORCIDLink";
import styles from "./Contributor.module.css";

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
    <li className={styles.item}>
      <span>
        <ContributorAvatar data={contributor.image} />
      </span>
      <div>
        <NamedLink href={href} className="default-link-styles">
          <strong>
            <ContributorName data={contribution.contributor} />
          </strong>
        </NamedLink>
        <div
          className={classNames("t-copy-lighter t-copy-sm", styles.metadata)}
        >
          {contribution.role && <p>{capitalize(contribution.role)}</p>}
          {(contribution.affiliation || contributor.affiliation) && (
            <p>{contribution.affiliation || contributor.affiliation}</p>
          )}
          {contributor.orcid && (
            <ORCIDLink className={styles.orcid} href={contributor.orcid}>
              {contributor.orcid}
            </ORCIDLink>
          )}
        </div>
      </div>
    </li>
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
