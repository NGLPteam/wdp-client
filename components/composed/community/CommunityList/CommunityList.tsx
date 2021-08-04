import React from "react";
import useModelListPage from "hooks/useModelListPage";
import { columns } from "components/composed/model/ModelList";
import { ModelListPage } from "components/composed/model";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { Connectionish, ExtractsConnection } from "types/graphql-helpers";

interface CommunityNode extends Record<string, unknown> {
  createdAt: string;
  updatedAt: string;
}

function CommunityList<
  Query extends OperationType,
  ConnectionType extends Connectionish,
  NodeType extends CommunityNode
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
        route: "community",
      }),
      columns.createdAt<NodeType>(),
      columns.updatedAt<NodeType>(),
    ],
  });

  return (
    <>
      <ModelListPage<NodeType>
        modelName="community"
        hideViewToggle
        {...modelListProps}
      />
    </>
  );
}

export default CommunityList;
