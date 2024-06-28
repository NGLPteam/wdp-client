import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { PrecisionDate } from "components/atomic";
import { PublishedDateColumnFragment$key } from "@/relay/PublishedDateColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps, hasFragments } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & PublishedDateColumnFragment$key;

const PublishedDateColumn = <T extends Node>(
  props: Props<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <span>{t("lists.published_column")}</span>,
    id: "published",
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T | Row) => originalRow }),
    cell: ({ getValue }) => {
      const value = getValue<Row>();

      if (!hasFragments(value)) return <></>;

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
