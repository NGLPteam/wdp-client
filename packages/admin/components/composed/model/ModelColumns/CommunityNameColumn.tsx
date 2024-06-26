import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { NamedLink } from "components/atomic";
import { CommunityNameColumnFragment$key } from "@/relay/CommunityNameColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps, hasFragments } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & CommunityNameColumnFragment$key;

const CommunityNameColumn = <T extends Node>(
  props: Props<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <span>{t("lists.name_column")}</span>,
    id: "title",
    // By default, the thumbnail fragment should be on the row root
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T | Row) => originalRow }),
    meta: {
      cellType: "name",
    },
    cell: (info) => {
      const value = info.getValue<Row>();

      if (!hasFragments(value)) return <></>;

      const community = readInlineData(fragment, value);

      return community ? (
        <NamedLink
          route="community"
          routeParams={{ slug: community.slug || "" }}
          passHref
        >
          <a className="t-weight-md a-link">{community.name}</a>
        </NamedLink>
      ) : null;
    },
    ...props,
  };
};

export default CommunityNameColumn;

const fragment = graphql`
  fragment CommunityNameColumnFragment on Community @inline {
    name
    slug
  }
`;
