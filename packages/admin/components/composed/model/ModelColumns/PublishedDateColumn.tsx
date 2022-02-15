import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { PrecisionDate } from "components/atomic";
import { PublishedDateColumnFragment$key } from "@/relay/PublishedDateColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & PublishedDateColumnFragment$key;

const PublishedDateColumn = <T extends Node>(
  props: Props<T> = {}
): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span>{t("lists.published_column")}</span>,
    id: "published",
    accessor: (originalRow: T | Row) => originalRow,
    Cell: ({ value }: CellProps<T>) => {
      const entity = useMaybeFragment(fragment, value);

      return entity ? <PrecisionDate data={entity.published} /> : null;
    },
    ...props,
  };
};

export default PublishedDateColumn;

const fragment = graphql`
  fragment PublishedDateColumnFragment on ReferencesGlobalEntityDates {
    published {
      ...PrecisionDateFragment
    }
  }
`;
