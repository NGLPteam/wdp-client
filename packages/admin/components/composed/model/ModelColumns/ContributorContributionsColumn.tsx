import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { ContributorContributionsColumnFragment$key } from "@/relay/ContributorContributionsColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & ContributorContributionsColumnFragment$key;

const ContributorContributionsColumn = <T extends Node>(
  props: Props<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <span>{t("lists.contributions_column")}</span>,
    id: "contributions",
    accessorFn: (originalRow: T | Row) => originalRow,
    enableSorting: true,
    cell: ({ getValue }) => {
      const value = getValue() as ContributorContributionsColumnFragment$key;
      const contributor = readInlineData(fragment, value);

      return t("lists.contribution_count", {
        count: contributor?.contributionCount || 0,
      });
    },
    ...props,
  };
};

export default ContributorContributionsColumn;

const fragment = graphql`
  fragment ContributorContributionsColumnFragment on Contributor @inline {
    contributionCount
  }
`;
