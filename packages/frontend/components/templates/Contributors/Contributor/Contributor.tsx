import { graphql, useFragment } from "react-relay";
import startCase from "lodash/startCase";
import classNames from "classnames";
import NamedLink from "@/components/atomic/links/NamedLink";
import { ContributorFragment$key } from "@/relay/ContributorFragment.graphql";
import ContributorName from "@/components/composed/contributor/ContributorName";
import ContributorAvatar from "@/components/composed/contributor/ContributorAvatar";
import styles from "./Contributor.module.css";

export default function Contributor({
  data,
  showAvatar = true,
}: {
  data?: ContributorFragment$key | null;
  showAvatar?: boolean;
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
      {showAvatar && (
        <span>
          <ContributorAvatar data={contributor.image} />
        </span>
      )}
      <div>
        <NamedLink href={href} className="default-link-styles">
          <strong>
            <ContributorName data={contribution.contributor} />
          </strong>
        </NamedLink>
        <div
          className={classNames("t-copy-lighter t-copy-sm", styles.metadata)}
        >
          {contribution.role && (
            <p>{startCase(contribution.role.replaceAll("_", " "))}</p>
          )}
          {(contribution.affiliation || contributor.affiliation) && (
            <p>{contribution.affiliation || contributor.affiliation}</p>
          )}
          {contributor.title && <p>{contributor.title}</p>}
        </div>
      </div>
    </li>
  );
}

const fragment = graphql`
  fragment ContributorFragment on Contribution {
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
        title
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
