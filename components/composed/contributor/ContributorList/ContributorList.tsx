import React from "react";
import useModelListPage from "hooks/useModelListPage";
import { columns } from "components/composed/model/ModelList";
import { ModelListPage } from "components/composed/model";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { Connectionish, ExtractsConnection } from "types/graphql-helpers";

interface ContributorNode extends Record<string, unknown> {
  createdAt?: string;
  updatedAt?: string;
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
      columns.name<NodeType>({
        route: "contributor",
        accessor: (row: any) =>
          `${row.name || `${row.firstName} ${row.lastName}`}`,
      }),
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
