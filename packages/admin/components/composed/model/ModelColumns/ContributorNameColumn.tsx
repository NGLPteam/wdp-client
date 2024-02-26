import { graphql, readInlineData } from "relay-runtime";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import { Avatar, NamedLink } from "components/atomic";
import { ContributorNameColumnFragment$key } from "@/relay/ContributorNameColumnFragment.graphql";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & ContributorNameColumnFragment$key;

const ContributorNameColumn = <T extends Node>(
  props: Props<T> = {}
): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <span>{t("lists.name_column")}</span>,
    id: "name",
    accessorFn: (originalRow: T | Row) => originalRow,
    meta: {
      cellType: "name",
    },
    cell: ({ getValue }) => {
      const value = getValue() as ContributorNameColumnFragment$key;
      const contributor = readInlineData(fragment, value);
      const lastNameFirst = false; // get(state, "sortBy[0].id", "") === "name";

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
  fragment ContributorNameColumnFragment on Contributor @inline {
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
