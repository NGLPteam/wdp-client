import { graphql, readInlineData } from "react-relay";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import { PrecisionDate } from "components/atomic";
import { PublishedDateColumnFragment$key } from "@/relay/PublishedDateColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & PublishedDateColumnFragment$key;

const PublishedDateColumn = <T extends Node>(
  props: Props<T> = {}
): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <span>{t("lists.published_column")}</span>,
    id: "published",
    accessorFn: (originalRow: T | Row) => originalRow,
    cell: ({ getValue }) => {
      const value = getValue() as PublishedDateColumnFragment$key;
      const entity = readInlineData(fragment, value);

      return entity ? <PrecisionDate data={entity.published} /> : null;
    },
    ...props,
  };
};

export default PublishedDateColumn;

const fragment = graphql`
  fragment PublishedDateColumnFragment on ReferencesGlobalEntityDates @inline {
    published {
      ...PrecisionDateFragment
    }
  }
`;
