import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import get from "lodash/get";
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
    cellType: "name",
    Cell: ({ value, state }: CellProps<T>) => {
      const contributor = useMaybeFragment(fragment, value);
      const lastNameFirst = get(state, "sortBy[0].id", "") === "name";

      return contributor ? (
        <NamedLink
          route="contributor"
          routeParams={{ slug: contributor?.slug || "" }}
          passHref
        >
          <a className="t-weight-md a-link l-flex l-flex--gap-sm">
            <Avatar data={contributor.image} />
            <span>{getContributorDisplayName(contributor, lastNameFirst)}</span>
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
      ...AvatarFragment
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
