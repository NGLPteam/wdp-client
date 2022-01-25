import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { Avatar, NamedLink } from "components/atomic";
import { ContributorNameColumnFragment$key } from "@/relay/ContributorNameColumnFragment.graphql";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & ContributorNameColumnFragment$key;

const ContributorNameColumn = <T extends Node>(
  props: Props<T> = {}
): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span>{t("lists.name_column")}</span>,
    id: "name",
    accessor: (originalRow: T | Row) => originalRow,
    disableSortBy: true,
    cellType: "name",
    Cell: ({ value }: CellProps<T>) => {
      const contributor = useMaybeFragment(fragment, value);

      return contributor ? (
        <NamedLink
          route="contributor"
          routeParams={{ slug: contributor?.slug || "" }}
          passHref
        >
          <a className="t-weight-md a-link l-flex l-flex--align-center l-flex--gap-sm">
            {contributor.image?.storage && (
              <Avatar url={contributor.image.small?.webp?.url || ""} />
            )}
            <span>{getContributorDisplayName(contributor)}</span>
          </a>
        </NamedLink>
      ) : null;
    },
    ...props,
  };
};

export default ContributorNameColumn;

const fragment = graphql`
  fragment ContributorNameColumnFragment on Contributor {
    __typename
    image {
      storage
      small {
        webp {
          url
          height
          width
        }
      }
    }
    ... on Sluggable {
      slug
    }
    ... on OrganizationContributor {
      legalName
    }
    ... on PersonContributor {
      givenName
      familyName
    }
  }
`;
