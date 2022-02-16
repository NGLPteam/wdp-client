import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { ContributorAffiliationColumnFragment$key } from "@/relay/ContributorAffiliationColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & ContributorAffiliationColumnFragment$key;

const ContributorAffiliationColumn = <T extends Node>(
  props: Props<T> = {}
): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span>{t("lists.affiliation_column")}</span>,
    id: "affiliation",
    accessor: (originalRow: T | Row) => originalRow,
    disableSortBy: false,
    Cell: ({ value }: CellProps<T>) => {
      const contributor = useMaybeFragment(fragment, value);

      return contributor?.affiliation || "";
    },
    ...props,
  };
};

export default ContributorAffiliationColumn;

const fragment = graphql`
  fragment ContributorAffiliationColumnFragment on Contributor {
    ... on PersonContributor {
      affiliation
    }
  }
`;
