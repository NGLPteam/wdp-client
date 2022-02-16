import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { ContributorContributionsColumnFragment$key } from "@/relay/ContributorContributionsColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & ContributorContributionsColumnFragment$key;

const ContributorContributionsColumn = <T extends Node>(
  props: Props<T> = {}
): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span>{t("lists.contributions_column")}</span>,
    id: "contributions",
    accessor: (originalRow: T | Row) => originalRow,
    disableSortBy: false,
    Cell: ({ value }: CellProps<T>) => {
      const contributor = useMaybeFragment(fragment, value);

      return t("lists.contribution_count", {
        count: contributor?.contributionCount || 0,
      });
    },
    ...props,
  };
};

export default ContributorContributionsColumn;

const fragment = graphql`
  fragment ContributorContributionsColumnFragment on Contributor {
    contributionCount
  }
`;
