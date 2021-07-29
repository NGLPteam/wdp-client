import React from "react";
import useModelListPage from "hooks/useModelListPage";
import { columns } from "components/composed/model/ModelList";
import { ModelListPage } from "components/composed/model";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { Connectionish, ExtractsConnection } from "types/graphql-helpers";
import { NamedLink } from "components/atomic";
import type { CellProps } from "react-table";

interface ContributorNode extends Record<string, unknown> {
  createdAt?: string | null;
  updatedAt?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  slug: string;
}

function ContributorList<
  Query extends OperationType,
  ConnectionType extends Connectionish,
  NodeType extends ContributorNode
>({
  query,
  queryVars = {},
  toConnection,
  defaultOrder,
}: {
  query: GraphQLTaggedNode;
  queryVars?: Partial<Query["variables"]>;
  toConnection: ExtractsConnection<Query, ConnectionType>;
  defaultOrder: Query["variables"]["order"];
}) {
  const { modelListProps } = useModelListPage<Query, ConnectionType, NodeType>({
    query,
    queryVars,
    defaultOrder,
    toConnection,
    handleEdit: ({ row }) => console.info(`edit ${row.original.slug}`), // eslint-disable-line
    handleDelete: ({ row }) => console.info(`delete ${row.original.slug}`), // eslint-disable-line
    handleSelection: ({ selection }) => console.table(selection), // eslint-disable-line
    columns: [
      // The following would be preferable, but I'm not sure how to make it pass the TS
      // checker

      // columns.name<NodeType>({
      //   route: "contributor",
      //   accessor: <T extends ContributorNode>(row: T) => {
      //     if (row.name) return row.name;
      //     if (row.firstName && row.lastName)
      //       return `${row.firstName} ${row.lastName}`;
      //     return null;
      //   },
      // }),

      {
        Header: "NameTest",
        id: "NameTest",
        disableSortBy: true,
        accessor: <T extends ContributorNode>(row: T) => {
          if (row.name) return row.name;
          if (row.firstName && row.lastName)
            return `${row.firstName} ${row.lastName}`;
          return null;
        },
        Cell: ({ row, value }: CellProps<NodeType>) => {
          if (!row?.original?.slug) return value;
          return (
            <NamedLink
              route={"contributor"}
              routeParams={{ slug: row.original.slug }}
              passHref
            >
              <a className="t-weight-md a-link">{value}</a>
            </NamedLink>
          );
        },
      },
      columns.createdAt<NodeType>(),
      columns.updatedAt<NodeType>(),
    ],
  });

  return (
    <>
      <ModelListPage<NodeType>
        modelName="contributor"
        hideViewToggle
        {...modelListProps}
      />
    </>
  );
}

export default ContributorList;
