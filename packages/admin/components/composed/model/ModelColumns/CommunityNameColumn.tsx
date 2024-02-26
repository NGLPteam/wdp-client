import { graphql, readInlineData } from "relay-runtime";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import { NamedLink } from "components/atomic";
import { CommunityNameColumnFragment$key } from "@/relay/CommunityNameColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & CommunityNameColumnFragment$key;

const CommunityNameColumn = <T extends Node>(
  props: Props<T> = {}
): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <span>{t("lists.name_column")}</span>,
    id: "title",
    // By default, the thumbnail fragment should be on the row root
    accessorFn: (originalRow: T | Row) => originalRow,
    meta: {
      cellType: "name",
    },
    cell: (info) => {
      const value = info.getValue() as CommunityNameColumnFragment$key;
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
