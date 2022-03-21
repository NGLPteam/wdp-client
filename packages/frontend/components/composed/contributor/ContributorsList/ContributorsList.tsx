import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@wdp/lib/hooks";
import ContributorName from "../ContributorName";
import {
  ContributorsListFragment$data,
  ContributorsListFragment$key,
} from "@/relay/ContributorsListFragment.graphql";
import { Link, NamedLink } from "components/atomic";

type Node = ContributorsListFragment$data["nodes"][number];

export default function ContributorsList({
  data,
  className,
  itemSlug,
  collectionSlug,
  filterRole,
}: Props) {
  const contributionData = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const size = useWindowSize();

  const limit = useMemo(() => {
    if (!size?.width) return 4;

    return size.width < 541 ? 2 : size.width < 769 ? 3 : 4;
  }, [size]);

  const contributions = useMemo(() => {
    // Filter contributions by role, or return all contributions
    return filterRole
      ? contributionData?.nodes?.filter(
          ({ role }: Node) =>
            role && role.toLowerCase() === filterRole.toLocaleLowerCase()
        )
      : contributionData?.nodes || [];
  }, [contributionData, filterRole]);

  return contributions && contributions.length > 0 ? (
    <span className={className}>
      {contributions.slice(0, limit).map(({ contributor }: Node, i: number) => (
        <React.Fragment key={i}>
          {contributor.slug ? (
            <>
              <NamedLink
                route="contributor"
                routeParams={{
                  slug: contributor.slug,
                  ...(itemSlug && { item: itemSlug }),
                  ...(collectionSlug && { collection: collectionSlug }),
                }}
                passHref
              >
                <Link>
                  <ContributorName data={contributor} />
                </Link>
              </NamedLink>
              {i < contributions.length - 1 && ", "}
            </>
          ) : (
            <>
              <ContributorName data={contributor} />
              {i < contributions.length - 1 && ", "}
            </>
          )}
        </React.Fragment>
      ))}
      {contributions.length > limit && (
        <>{t("list.and_x_more", { count: contributions.length - limit })}</>
      )}
    </span>
  ) : null;
}

interface Props {
  data?: ContributorsListFragment$key | null;
  label?: string;
  className?: string;
  /** Pass this in to add the parent item's slug to the contributor route */
  itemSlug?: string;
  /** Pass this in to add the parent collection's slug to the contributor route */
  collectionSlug?: string;
  /** Filter by a role, such as 'author' */
  filterRole?: string;
}

const fragment = graphql`
  fragment ContributorsListFragment on ItemContributionConnection {
    nodes {
      role
      contributor {
        ... on Sluggable {
          slug
        }
        ...ContributorNameFragment
      }
    }
  }
`;
