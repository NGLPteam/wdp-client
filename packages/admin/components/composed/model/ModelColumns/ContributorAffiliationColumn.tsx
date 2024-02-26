import { graphql, readInlineData } from "relay-runtime";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import { ContributorAffiliationColumnFragment$key } from "@/relay/ContributorAffiliationColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & ContributorAffiliationColumnFragment$key;

const ContributorAffiliationColumn = <T extends Node>(
  props: Props<T> = {}
): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <span>{t("lists.affiliation_column")}</span>,
    id: "affiliation",
    accessorFn: (originalRow: T | Row) => originalRow,
    enableSorting: true,
    cell: ({ getValue }) => {
      const value = getValue() as ContributorAffiliationColumnFragment$key;
      const contributor = readInlineData(fragment, value);

      return contributor?.affiliation || "";
    },
    ...props,
  };
};

export default ContributorAffiliationColumn;

const fragment = graphql`
  fragment ContributorAffiliationColumnFragment on Contributor @inline {
    ... on PersonContributor {
      affiliation
    }
  }
`;
