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

type Node = ContributorsListFragment$data["edges"][number];

export default function ContributorsList({
  data,
  className,
  itemSlug,
  collectionSlug,
}: Props) {
  const contributions = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const size = useWindowSize();

  const total = contributions?.pageInfo?.totalCount || 0;

  const limit = useMemo(() => {
    if (!size?.width) return 4;

    return size.width < 541 ? 2 : size.width < 769 ? 3 : 4;
  }, [size]);

  return contributions && total > 0 ? (
    <span className={className}>
      {contributions.edges.slice(0, limit).map(({ node }: Node, i: number) => (
        <React.Fragment key={i}>
          {node.contributor.slug ? (
            <>
              <NamedLink
                route="contributor"
                routeParams={{
                  slug: node.contributor.slug,
                  ...(itemSlug && { item: itemSlug }),
                  ...(collectionSlug && { collection: collectionSlug }),
                }}
                passHref
              >
                <Link>
                  <ContributorName data={node.contributor} />
                </Link>
              </NamedLink>
              {i < contributions.edges.length - 1 && ", "}
            </>
          ) : (
            <>
              <ContributorName data={node.contributor} />
              {i < contributions.edges.length - 1 && ", "}
            </>
          )}
        </React.Fragment>
      ))}
      {total > limit && <>{t("common.and_x_more", { count: total - limit })}</>}
    </span>
  ) : null;
}

interface Props {
  data?: ContributorsListFragment$key | null;
  label?: string;
  className?: string;
  /* Pass this in to add the parent item's slug to the contributor route */
  itemSlug?: string;
  /* Pass this in to add the parent collection's slug to the contributor route */
  collectionSlug?: string;
}

const fragment = graphql`
  fragment ContributorsListFragment on ItemContributionConnection {
    edges {
      node {
        contributor {
          ... on Sluggable {
            slug
          }
          ...ContributorNameFragment
        }
      }
    }
    pageInfo {
      totalCount
    }
  }
`;
