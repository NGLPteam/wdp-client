import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { ContributorAffiliationColumnFragment$key } from "@/relay/ContributorAffiliationColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps, hasFragments } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & ContributorAffiliationColumnFragment$key;

const ContributorAffiliationColumn = <T extends Node>(
  props: Props<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <span>{t("lists.affiliation_column")}</span>,
    id: "affiliation",
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T | Row) => originalRow }),
    enableSorting: true,
    cell: ({ getValue }) => {
      const value = getValue<Row>();

      if (!hasFragments(value)) return "";

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
